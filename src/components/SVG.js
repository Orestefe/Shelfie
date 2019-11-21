import React from "react";

const SVG = ({
	path = "M483 243h-72a5 5 0 002-6l-38-104c-1-2-4-3-6-3l-25 8v-38c0-3-2-5-5-5h-21c-3 0-5 2-5 5v13h-25v-13c0-3-3-5-5-5h-53c-3 0-5 2-5 5v13h-12v-4c0-3-2-5-5-5h-32v-4c0-3-2-5-5-5h-52c-3 0-5 2-5 5v24H79c-3 0-5 2-5 5v114H5c-3 0-5 3-5 5v40c0 3 2 5 5 5h55v95c0 3 2 5 5 5h40c2 0 5-2 5-5v-95h267v95c0 3 2 5 5 5h40c3 0 5-2 5-5v-95h56c3 0 5-2 5-5v-40c0-2-2-5-5-5zM367 141l35 95-21 6-35-94 21-7zm3 102h-26v-70l26 70zm-47-138h11v138h-11V105zm-10 18v120h-25V123h25zm-78-18h43v138h-43V105zm-10 18v120h-12V123h12zm-22-9v129h-27V114h27zm-79-9h42v138h-42V105zm-40 29h30v109H84V134zm-5 119h399v15H10v-15h69zm21 130H70v-90h10v5a5 5 0 0010 0v-5h10v90zm317 0h-30v-90h10v5a5 5 0 0010 0v-5h10v90zm5-100H10v-5h468v5h-56zM92 368a7 7 0 11-15 0 7 7 0 0115 0zm318 0a7 7 0 11-14 0 7 7 0 0114 0zM80 353v-35a5 5 0 0110 0v35a5 5 0 01-10 0zm317 0v-35a5 5 0 0110 0v35a5 5 0 01-10 0z",
	fill = "#fff",
	viewBox = "0 0 487.9 487.9",
	height = "60",
	width = "60",
}) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox={viewBox}
			height={height}
			width={width}>
			<path style={{ fill: fill }} d={path} />
		</svg>
	);
};

export default SVG;
