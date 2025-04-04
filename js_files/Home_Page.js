const informations = [
  {
    left : 'Name :',
    right : 'Atirath Pal'
  },
  {
    left : 'Course :',
    right : 'Computer Science and Engineering'
  },
  {
    left : 'College :',
    right : 'Government College of Engineering and Textile Technology, Serampur'
  },
  {
    left : 'Year :',
    right : '2nd Year'
  }
]

let informationHTML = "";

informations.forEach((info)=>{
  informationHTML += `
    <div style="display:flex; padding:10px 0px;">
      <div class="left-column-div">${info.left}</div>
      <div class="right-column-div">${info.right}</div>
    </div>
  `
});

document.querySelector('.Information-div').innerHTML = informationHTML;


const Links = [
  {
    name : 'Facebook',
    link : 'https://www.facebook.com/atirath.pal/',
    icon : 'icons/Facebook-Logo.jpg',
    type : 'Social-media'
  },
  {
    name : 'LinkedIn',
    link : 'https://www.linkedin.com/in/atirath-pal-95163b28a/',
    icon : 'icons/LinkedIn-Logo.webp',
    type : 'Social-media'
  },
  {
    name : 'Instagram',
    link : 'https://www.instagram.com/atirathpal/',
    icon : 'icons/Instagram-Logo.png',
    type : 'Social-media'
  },
  {
    name : 'Leetcode',
    link : 'https://leetcode.com/u/Atirath_Pal/',
    icon : 'icons/LeetCode_Logo.png',
    type : 'Coding-platform'
  },
  {
    name : 'GFG',
    link : 'https://www.geeksforgeeks.org/user/atirataq89/',
    icon : 'icons/Gfg-Logo.png',
    type : 'Coding-platform'
  },
  {
    name : 'Github',
    link : 'https://github.com/Atirath-Pal',
    icon : 'icons/Github-Logo.png',
    type : 'Coding-platform'
  }
]

let social_media_linksHTML = `
    <div class="left-column-div-1">
      <p>Social Media Links : </p>
    </div>
    <div class="right-column-div-1" style="display:flex;">
`;
let coding_platform_linksHTML = `
    <div class="left-column-div-1">
      <p>Coding Platform Links : </p> 
    </div>
    <div class="right-column-div-1" style="display:flex;">
`;
Links.forEach((link)=>{
  if(link.type ==='Social-media'){
    social_media_linksHTML += `
      <div class="link-div">
        <div>
          <a href="${link.link}">
            <img class="icon-logo-css" src="${link.icon}">
          </a>
        </div>
        <div>${link.name}</div>
      </div>
    `
  }
  if(link.type === 'Coding-platform'){
    coding_platform_linksHTML += `
      <div class="link-div">
        <div>
          <a href="${link.link}">
            <img class="icon-logo-css" src="${link.icon}">
          </a>
        </div>
        <div>${link.name}</div>
      </div>
    `
  }
});

social_media_linksHTML += `
  </div>
`;
coding_platform_linksHTML += `
  </div>
`;

document.querySelector('.js-social-media-div').innerHTML = social_media_linksHTML;
document.querySelector('.js-coding-platform-div').innerHTML = coding_platform_linksHTML;


function check(){
  console.log("Working.....");
  console.log("Working.....");
}
check();
