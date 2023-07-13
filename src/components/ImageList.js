import React from 'react';
import Image from './Image';

import './ImageList.css';

const ImageList = ({ imgArray, onImgLoad }) =>{

	let imgElementsArr
	let counter = imgArray.length;	
	if(counter > 1){
		imgElementsArr = imgArray.map((el, i )=>{
			return (
				<Image
					key={el+i}
					src={imgArray[i].urls.small}
					onImgLoad={onImgLoad}
				/> 
			)
		})
	}

	if(counter < 1){
		imgElementsArr = imgArray.map((el, i )=>{
			return (
				<Image 
					key={el+i}
					src={imgArray[i].urls.thumb}
					onImgLoad={onImgLoad}
				/> 
			)
		})
	}
	
	return(
	<div className="image-list">
		{imgElementsArr}
	</div>
	)
};

export default ImageList;