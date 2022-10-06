
const NFTimg = document.querySelector('.nft-img-container')
const ViewDiv = document.querySelector('.view-img-container')
NFTimg.addEventListener('mouseover', () => {
  ViewDiv.classList.remove('hide')
})

NFTimg.addEventListener('mouseout', () => {
  ViewDiv.classList.add('hide')
})