import React, { useCallback, useState } from 'react';
import classNames from 'classnames';
import { useFormik } from 'formik';
import Icon from '../../../components/icon/Icon';
import Page from '../../../layout/Page/Page';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import Card, { CardBody } from '../../../components/bootstrap/Card';
import Badge from '../../../components/bootstrap/Badge';
import Button from '../../../components/bootstrap/Button';
import Dropdown, {
	DropdownItem,
	DropdownMenu,
	DropdownToggle,
} from '../../../components/bootstrap/Dropdown';
import useTourStep from '../../../hooks/useTourStep';
import PresentaionPagesSubHeader from '../../../widgets/PresentaionPagesSubHeader';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import UserImage1 from '../../../assets/img/wanna/wanna1.png';
import UserImage2 from '../../../assets/img/wanna/wanna2.png';
import UserImage3 from '../../../assets/img/wanna/wanna3.png';
import UserImage4 from '../../../assets/img/wanna/wanna4.png';
import UserImage5 from '../../../assets/img/wanna/wanna5.png';
import UserImage6 from '../../../assets/img/wanna/wanna6.png';
import Modal, { ModalBody, ModalFooter, ModalHeader } from '../../../components/bootstrap/Modal';
import FormGroup from '../../../components/bootstrap/forms/FormGroup';
import { OffCanvasTitle } from '../../../components/bootstrap/OffCanvas';
import Input from '../../../components/bootstrap/forms/Input';

enum ModalType {
	NEW = 'new',
	EDIT = 'edit',
}

type TModalType = ModalType.NEW | ModalType.EDIT;

const User = () => {
	const [showUpsertUserModal, setShowUpsertUserModal] = useState(false);
	const [modalType, setModalType] = useState<TModalType>(ModalType.NEW);
	const userImages = [UserImage1, UserImage2, UserImage3, UserImage4, UserImage5, UserImage6];
	const fetchAllUsers = useCallback(async () => {
		const data = await axios.get('https://blue-journalist-bbrpv.ineuron.app:4000/users');
		console.log(data);
		return data;
	}, []);
	const { refetch, data: result } = useQuery(['todos'], fetchAllUsers);
	useTourStep(18);

	const formik = useFormik({
		initialValues: {
			firstName: '',
			lastName: '',
			phoneNumber: 0,
			age: 0,
		},
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		onSubmit: async (values) => {
			const reqBody = {
				firstName: formik.values.firstName,
				lastName: formik.values.lastName,
				phoneNumber: formik.values.phoneNumber,
				age: formik.values.age,
			};
			if (modalType === ModalType.NEW) {
				await axios.post(
					'https://blue-journalist-bbrpv.ineuron.app:4000/user/create',
					reqBody,
				);
			} else {
				await axios.patch(
					'https://blue-journalist-bbrpv.ineuron.app:4000/user/create',
					reqBody,
				);
			}
			refetch();
			setModalType(ModalType.NEW);
			setShowUpsertUserModal(false);
		},
	});

	const addNewModal = useCallback(
		() => (
			<Modal
				setIsOpen={setShowUpsertUserModal}
				isOpen={showUpsertUserModal}
				titleId='upcomingEdit'
				size='sm'>
				<ModalHeader setIsOpen={setShowUpsertUserModal}>
					<OffCanvasTitle id='upcomingEdit'>
						{modalType === ModalType.NEW ? 'Create New User' : 'Edit User'}
					</OffCanvasTitle>
				</ModalHeader>
				<ModalBody>
					<div className='row g-4'>
						<div className='col-12'>
							<FormGroup id='firstName' label='First Name' isFloating>
								<Input
									placeholder='First Name'
									value={formik.values.firstName}
									onChange={formik.handleChange}
								/>
							</FormGroup>
						</div>
						<div className='col-12'>
							<FormGroup id='lastName' label='Last Name' isFloating>
								<Input
									placeholder='Last Name'
									value={formik.values.lastName}
									onChange={formik.handleChange}
								/>
							</FormGroup>
						</div>
						<div className='col-12'>
							<FormGroup id='phoneNumber' defaultChecked label='Phone Number'>
								<Input
									placeholder='Phone Number'
									value={formik.values.phoneNumber}
									onChange={formik.handleChange}
								/>
							</FormGroup>
						</div>
						<div className='col-12'>
							<FormGroup id='age' defaultChecked label='Age'>
								<Input
									placeholder='Age'
									value={formik.values.age}
									onChange={formik.handleChange}
								/>
							</FormGroup>
						</div>
					</div>
				</ModalBody>
				<ModalFooter className='bg-transparent'>
					<Button color='info' className='w-100' onClick={formik.handleSubmit}>
						Save
					</Button>
				</ModalFooter>
			</Modal>
		),
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[modalType, showUpsertUserModal],
	);

	return (
		<PageWrapper title='Users Page'>
			<PresentaionPagesSubHeader
				setAddNewModalVisible={setShowUpsertUserModal}
				showSubHeaderRight
				title='iNeuron Intelligence Users'
			/>
			<Page container='fluid'>
				<div className='row row-cols-xxl-3 row-cols-lg-3 row-cols-md-2'>
					{result?.data?.data?.map((user: any, index: any) => (
						<div key={user.firstName + index} className='col'>
							<Card>
								<CardBody>
									<div className='row g-3'>
										<div className='col d-flex'>
											<div className='flex-shrink-0'>
												<div className='position-relative'>
													<div
														className='ratio ratio-1x1'
														style={{ width: 100 }}>
														<div
															className={classNames(
																`bg-l25-${user.color}`,
																'rounded-2',
																'd-flex align-items-center justify-content-center',
																'overflow-hidden',
																'shadow',
															)}>
															<img
																src={userImages[index]}
																alt={user.name}
																width={100}
															/>
														</div>
													</div>
													{user.isOnline && (
														<span className='position-absolute top-100 start-85 translate-middle badge border border-2 border-light rounded-circle bg-success p-2'>
															<span className='visually-hidden'>
																Online user
															</span>
														</span>
													)}
												</div>
											</div>
											<div className='flex-grow-1 ms-3 d-flex justify-content-between'>
												<div className='w-100'>
													<div className='row'>
														<div className='col'>
															<div className='d-flex align-items-center'>
																<div className='fw-bold fs-5 me-2'>
																	{`${user.firstName} ${user.lastName}`}
																</div>
																<small className='border border-success border-2 text-success fw-bold px-2 py-1 rounded-1'>
																	{user.position}
																</small>
															</div>

															<div className='text-muted'>
																@{user.firstName}
															</div>
														</div>
														<div className='col-auto'>
															<Dropdown direction='start'>
																<DropdownToggle hasIcon={false}>
																	<Button
																		icon='ThreeDotsVertical'
																		color='dark'
																		isLight
																		hoverShadow='sm'
																		data-tour={user.name}
																	/>
																</DropdownToggle>
																<DropdownMenu>
																	<DropdownItem
																		onClick={() => {
																			setModalType(
																				ModalType.EDIT,
																			);
																			setShowUpsertUserModal(
																				true,
																			);
																		}}
																		className='p-2'>
																		<div>
																			<Icon
																				size='lg'
																				icon='edit'
																			/>
																			<span>Edit</span>
																		</div>
																	</DropdownItem>
																	<DropdownItem className='p-2'>
																		<div>
																			<Icon
																				size='lg'
																				icon='trash'
																			/>
																			<span>Delete</span>
																		</div>
																	</DropdownItem>
																</DropdownMenu>
															</Dropdown>
														</div>
													</div>
													{!!user?.phoneNumber && (
														<div className='row g-2 mt-3'>
															<div className='col-auto'>
																<Badge
																	isLight
																	color='primary'
																	className='px-3 py-2'>
																	<Icon
																		icon='ContactPhone'
																		size='lg'
																		className='me-1'
																	/>
																	{user?.phoneNumber}
																</Badge>
															</div>
														</div>
													)}
												</div>
											</div>
										</div>
									</div>
								</CardBody>
							</Card>
						</div>
					))}
				</div>
			</Page>
			{addNewModal()}
		</PageWrapper>
	);
};

export default User;
