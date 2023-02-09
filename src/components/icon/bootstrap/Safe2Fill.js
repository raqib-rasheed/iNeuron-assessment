import * as React from 'react';

function SvgSafe2Fill(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			fill='currentColor'
			className='svg-icon'
			viewBox='0 0 16 16'
			{...props}>
			<path d='M6.563 8H5.035a3.482 3.482 0 01.662-1.596l1.08 1.08c-.094.16-.167.332-.214.516zm.921-1.223l-1.08-1.08A3.482 3.482 0 018 5.035v1.528c-.184.047-.357.12-.516.214zM9 6.563V5.035a3.482 3.482 0 011.596.662l-1.08 1.08A1.988 1.988 0 009 6.563zm1.223.921l1.08-1.08c.343.458.577 1.003.662 1.596h-1.528a1.989 1.989 0 00-.214-.516zM10.437 9h1.528a3.483 3.483 0 01-.662 1.596l-1.08-1.08c.094-.16.167-.332.214-.516zm-.921 1.223l1.08 1.08A3.483 3.483 0 019 11.965v-1.528c.184-.047.357-.12.516-.214zM8 10.437v1.528a3.483 3.483 0 01-1.596-.662l1.08-1.08c.16.094.332.167.516.214zm-1.223-.921l-1.08 1.08A3.482 3.482 0 015.035 9h1.528c.047.184.12.357.214.516zM7.5 8.5a1 1 0 112 0 1 1 0 01-2 0z' />
			<path d='M2.5 1A1.5 1.5 0 001 2.5V3H.5a.5.5 0 000 1H1v4H.5a.5.5 0 000 1H1v4H.5a.5.5 0 000 1H1v.5A1.5 1.5 0 002.5 16h12a1.5 1.5 0 001.5-1.5v-12A1.5 1.5 0 0014.5 1h-12zm6 3a4.5 4.5 0 110 9 4.5 4.5 0 010-9z' />
		</svg>
	);
}

export default SvgSafe2Fill;
