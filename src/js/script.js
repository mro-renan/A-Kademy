for (const key in object) {
	if (Object.hasOwnProperty.call(object, key)) {
		const element = object[key];
		const closeBannerButton = document.getElementById('closeBanner');
		const bannerItem = document.getElementById('banner');
		const returnBanner = document.getElementById('returnBanner')
		
		closeBannerButton.addEventListener('click', ()=>{
		    closeBanner();
		})
		
		const closeBanner = () => {
		    bannerItem.style.display = "none";
		    returnBanner.style.display = "none;"
		};
		
		const openBanner = () => {
		    bannerItem.style.display = "block";
		    returnBanner.style.display = "block;"
		};
	}
}