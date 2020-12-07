import React from 'react'

import "../index.css"

const ShakerAnim = (props) => {
  const [wobble, setWobble] = React.useState(0)
  const [shake, setShake] = React.useState(0)
 
  function handleClick(){
    setWobble(1);
    props.chooseTheme(props.theme);
    setShake(1)
  }

  
  return (
    <>
    <center>
    
    <svg height="400px" className="shake" alt="jar" onClick={() => handleClick() } onAnimationEnd={() => setWobble(0)} wobble={wobble} id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 231.08 373.45"><defs></defs><path d="M195.84,279.3c-2.94-3.78-5.37-7.39-1.48-11.7a2.89,2.89,0,0,0,.51-1.89c-.28-6.58-.31-13.19-1-19.73-1-8.91,1.44-12.49,10.09-14.73,29.23-7.56,59.14-7.18,88.92-7.24s59.67,1.08,89.09,6.89a52.17,52.17,0,0,1,5.87,1.2c4.69,1.53,7.75,4.37,7.49,9.82a138.81,138.81,0,0,0-.31,15c.27,4.37,1.74,8.67,2,13,.17,3.06-.82,6.19-1.29,9.28h-1.61c1,1.49,2.61,2.88,2.88,4.49.34,2,.3,4.76-.85,6.08-6.24,7.12-6.3,13.51-.46,21.22a168.66,168.66,0,0,1,14,20.92c2,3.72,2.46,8.64,2.57,13.05,1.28,50.68.52,101.33-2.62,151.94-.74,12-2,23.91-2.57,35.88-.56,12.72-6.77,22.89-14.19,32.36-15.06,19.2-34.24,31.26-59.36,31.94-9.83.26-19.67.48-29.5.31-17-.29-34.12.31-50.94-1.63-30.59-3.55-54.06-18.53-66.8-47.58C184,543,182.18,537,182.14,531.37c-.33-59.82-.2-119.65-.35-179.48,0-11,5.24-20.08,9.78-29.48,2.45-5.08,5.08-10.1,7.21-15.32s1.7-9.83-2.53-14.23C190.88,287.27,191.07,285.5,195.84,279.3Zm192,18.38c-2.67.29-4.63.41-6.57.73-9,1.49-18,3.92-27.1,4.4-47.62,2.5-95.27,4.11-142.73-2.58-4.09-.57-6.1.87-7.69,4.37-2.87,6.34-6.07,12.53-9.1,18.8-4.31,9-9.82,17.41-9.8,28,.12,59.66.05,119.32.33,179a41.88,41.88,0,0,0,3.45,16c11.47,26.39,32.21,42.39,60.26,45.38,26.75,2.84,53.91,1.92,80.9,2.34,25.53.41,45.4-10.84,60.69-30.77,7.83-10.19,13.33-21.18,13.77-34.58.62-18.81,2.77-37.58,3.21-56.38,1-41.65,1.21-83.3,1.92-124.95.2-12.17-5-21.89-12.82-30.51C391.79,311.58,387.51,306.2,387.87,297.68ZM208.18,285.61c20.39,6.27,41.61,6.68,62.58,9.21L206,292.09l-.28,1.79c7.7,1.6,15.33,3.95,23.11,4.68a696.79,696.79,0,0,0,127.23.08c9.89-.88,19.63-3.55,29.45-5.4l-.26-1.51-73.19,4.13-.11-1.68c20.45-.9,41-1.05,60.67-8.15C317.78,291,263,290.2,208.18,285.61ZM302.24,280,205,272.9C226.07,280.49,291.92,285.29,302.24,280Zm.59-8-.11,1.31a16.32,16.32,0,0,0,3,.85A313,313,0,0,0,370,273.7c1.4-.16,2.73-1,4.09-1.55l-.36-2.28C350.06,269.85,326.44,270.94,302.83,272Zm-6-6-81.58-4.3-.06,1.34C242.32,267.59,269.41,272.4,296.87,266Zm23.76-3.79.15,2.26c21.29,2.47,42.45,3.28,63-5.06l-.09-1.34ZM267.48,247.7l-.24-2.42H233.81a24.8,24.8,0,0,0,9.31,1.91c3,.11,7.37-1.42,8.71,0,3.21,3.45,5.6-2,8.6.28C262,248.65,265.08,247.7,267.48,247.7Zm70.92-2.37v1.93c4.34,0,8.68.07,13,0,4.1-.08,8.18-.33,12.27-.51l-.06-1.4Z" transform="translate(-181.79 -224.01)" /><path d="M353.05,557.52c-1.74.11-3.49.27-5.24.3-24.33.37-48.68.19-73,1.29-13.58.62-27.08,3.21-40.57,5.25-3.16.47-6.11,2.31-9.16,3.53l-.26,1.81c3.41,1.13,6.74,2.87,10.23,3.29,17.69,2.13,35.43,3.9,53.15,5.83a17.52,17.52,0,0,1,7.21,2.09c-2.35.12-4.71.44-7.05.33-20.67-1-41.16-3.22-61.29-8.22a7.78,7.78,0,0,1-3.24-1.15c-1.4-1.25-3.47-2.92-3.4-4.33s2.16-3.55,3.75-4c8.29-2.34,16.6-4.79,25.07-6.21C282,551.84,315,553.08,348,555.05a44.87,44.87,0,0,1,5.24.91Z" transform="translate(-181.79 -224.01)"/>
    <svg id="container">
    <svg className="wad1" id="Layer_2" data-name="Layer 2" height='100px' width='100px' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 167 166" x="1px" y="200px"><defs><style></style></defs><g className="cls-1-wad1"><path className="cls-2-wad1" d="M392.91,345.56a2,2,0,0,1-.39,1.89L375,368.26a2.07,2.07,0,0,1-.47.41l-12,7.61,7.94,6.55a2,2,0,0,1,.65,2.13,2,2,0,0,1-1.74,1.43L337.05,390a2.17,2.17,0,0,1-.76,0l-5.57-1.42-13.56,25.35a2.09,2.09,0,0,1-2.76.87L289.2,402.3a1.9,1.9,0,0,1-.55-.39L263.9,377.13l-17.82-10.78a2,2,0,0,1-.85-1l-5.84-14.94L227,343.23a2,2,0,0,1-1-1.91l2.12-24.44a2.25,2.25,0,0,1,.06-.36l6.37-22.62a3.12,3.12,0,0,1,.15-.39l19.37-36.91a2.08,2.08,0,0,1,2.55-1l14.44,5.19,8.11-11a2.07,2.07,0,0,1,1.67-.84h13.26a2.14,2.14,0,0,1,1.05.28L311,258.46l46.05,8.25a2,2,0,0,1,1.68,2.28l-1.44,9.86,7.77,6.94,14.26,2.49A2,2,0,0,1,381,290.5l-1.77,15.66,2,3a1.86,1.86,0,0,1,.24.49Zm-4.29.16-11-34.56-1.69-2.58L363,314.8l-2,6a1.24,1.24,0,0,1-.95.83l-14.44,2.68-1.5,22.9,4.76,8.84,14.93,12.33-1.59,1.86-13.95-11.51-10.16,18.69a1.26,1.26,0,0,1-.7.58L313,386l3.5,17.4-2.43.47L310.4,385.4a1.22,1.22,0,0,1,.82-1.39l25-8.17,10.33-19L341.82,348a1.34,1.34,0,0,1-.14-.65l1.59-24.17a1.22,1.22,0,0,1,1-1.12l14.66-2.73,1.9-5.81a1.19,1.19,0,0,1,.63-.71l13.63-6.57,1.5-13.22c-9.32,1.94-18.89,4.09-20.77,4.81-.57,1.12-2.35,3.84-7.93,11.33a1.22,1.22,0,0,1-.34.3l-51.08,32-9.15,28.18-2.36-.74,8.11-25-6.2,4.55-20.31,16.42a1.26,1.26,0,0,1-1.71-.13l-9.29-10.2-3.89.05a1.26,1.26,0,0,1-1.22-.94l-4.24-18.2,2.41-.54,4,17.24,17.83-.25,0,2.43-11.66.16,7.06,7.76,19.43-15.71,9.34-6.87h0l.07-.06L346,307.58c3.4-4.57,7.05-9.68,7.58-10.75.08-1,1.25-1.73,19.47-5.53l-9.31-1.63a2,2,0,0,1-1-.5l-27.46,5.14-61.53,16.82L251.7,330.44a1,1,0,0,1-.24.16l-6.13,3.21-13.89,7.28,10.67,6.19a2.08,2.08,0,0,1,.88,1l5.85,15,17.44,10.56a1.72,1.72,0,0,1,.39.31l24.69,24.71,23.07,11.43,3.33-6.24,10.05-18.78a2.07,2.07,0,0,1,2.35-1l.83.21,26.19-9a2,2,0,0,1,.79-1.06l4.94-3.14,9.11-5.79ZM337,386l27.22-3.07-6.25-5.15-22.63,7.79Zm-2.24-94,25.74-4.82-6.74-6a1.87,1.87,0,0,1-.4-.49,2,2,0,0,1-.25-1.29l1.32-9-44.47-8a2.06,2.06,0,0,1-.68-.25l-15.7-9.08H281.9l-7.47,10.13,26.88,13.43,24.4-4.68.23,0a1.23,1.23,0,0,1,.42.07l26.25,9.1-.82,2.29-25.94-9-21,4,8.62,4.31a1.23,1.23,0,0,1,.67,1,1.2,1.2,0,0,1-.54,1.08l-33.47,22.07ZM272.46,309l38.05-25.1-37.8-18.88a2.11,2.11,0,0,1-1.6.1l-14.19-5.1-18.44,35.13-6.25,22.23-1.87,21.5,19.8-10.38Z" transform="translate(-226 -249)"/><path className="cls-3-wad1" d="M377.63,311.16l11,34.56L372,365.44l-9.11,5.79-.63-1,1.59-1.86-14.93-12.33-4.76-8.84,1.5-22.9,14.44-2.68a1.24,1.24,0,0,0,.95-.83l2-6,12.91-6.22Z" transform="translate(-226 -249)"/><path className="cls-3-wad1" d="M376.6,293.06l-1.5,13.22-13.63,6.57a1.19,1.19,0,0,0-.63.71l-1.9,5.81-14.66,2.73a1.22,1.22,0,0,0-1,1.12l-1.59,24.17a1.34,1.34,0,0,0,.14.65l4.73,8.78-10.33,19-25,8.17a1.22,1.22,0,0,0-.82,1.39l3.71,18.45,2.43-.47,1.22.65-3.33,6.24-23.07-11.43-24.69-24.71a1.72,1.72,0,0,0-.39-.31l-17.44-10.56-5.85-15a2.08,2.08,0,0,0-.88-1l-10.67-6.19,13.89-7.28.89,1.71,4.24,18.2a1.26,1.26,0,0,0,1.22.94l3.89-.05,9.29,10.2a1.26,1.26,0,0,0,1.71.13l20.31-16.42,6.2-4.55-8.11,25,2.36.74,9.15-28.18,51.08-32a1.22,1.22,0,0,0,.34-.3c5.58-7.49,7.36-10.21,7.93-11.33C357.71,297.15,367.28,295,376.6,293.06Zm-74.84,79.21,6-16.6-2.34-.81-6.1,16.9a1.23,1.23,0,0,0-.05.63l2.12,11.18,2.44-.45Z" transform="translate(-226 -249)"/><path className="cls-3-wad1" d="M363.77,289.67l9.31,1.63c-18.22,3.8-19.39,4.53-19.47,5.53-.53,1.07-4.18,6.18-7.58,10.75l-51.26,32.11-.07.06h0l-9.34,6.87-19.43,15.71-7.06-7.76,11.66-.16,0-2.43-17.83.25-4-17.24-2.41.54-.89-1.71,6.13-3.21a1,1,0,0,0,.24-.16l22.06-19.31,61.53-16.82,27.46-5.14A2,2,0,0,0,363.77,289.67Z" transform="translate(-226 -249)"/><polygon className="cls-3-wad1" points="138.18 133.9 110.96 136.97 109.3 136.54 131.93 128.75 138.18 133.9"/><path className="cls-3" d="M362.28,370.24l.63,1L358,374.37a2,2,0,0,0-.79,1.06l-26.19,9-.83-.21a2.07,2.07,0,0,0-2.35,1L317.76,404l-1.22-.65L313,386l24.43-8a1.26,1.26,0,0,0,.7-.58l10.16-18.69Z" transform="translate(-226 -249)"/><path className="cls-3-wad1" d="M360.46,287.13,334.72,292l-54.55,14.91,33.47-22.07a1.2,1.2,0,0,0,.54-1.08,1.23,1.23,0,0,0-.67-1l-8.62-4.31,21-4,25.94,9,.82-2.29.71-.45a1.87,1.87,0,0,0,.4.49Z" transform="translate(-226 -249)"/><path className="cls-3-wad1" d="M354.39,270.34l-1.32,9a2,2,0,0,0,.25,1.29l-.71.45L326.36,272a1.23,1.23,0,0,0-.42-.07l-.23,0-24.4,4.68-26.88-13.43,7.47-10.13h11.64l15.7,9.08a2.06,2.06,0,0,0,.68.25Z" transform="translate(-226 -249)"/><path className="cls-3-wad1" d="M310.51,283.93,272.46,309l-22.3,19.5-19.8,10.38,1.87-21.5,6.25-22.23,18.44-35.13,14.19,5.1a2.11,2.11,0,0,0,1.6-.1Z" transform="translate(-226 -249)"/><path className="cls-2-wad1" d="M307.75,355.67l-6,16.6,2.06,10.85-2.44.45-2.12-11.18a1.23,1.23,0,0,1,.05-.63l6.1-16.9Z" transform="translate(-226 -249)"/></g></svg>


    <svg className="wad2" id="Layer_2" data-name="Layer 2" height='150px' width='150px' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 167 166" x="15px" y="100px"><defs><style></style></defs><g className="cls-1-wad2"><path className="cls-2-wad2" d="M392.91,345.56a2,2,0,0,1-.39,1.89L375,368.26a2.07,2.07,0,0,1-.47.41l-12,7.61,7.94,6.55a2,2,0,0,1,.65,2.13,2,2,0,0,1-1.74,1.43L337.05,390a2.17,2.17,0,0,1-.76,0l-5.57-1.42-13.56,25.35a2.09,2.09,0,0,1-2.76.87L289.2,402.3a1.9,1.9,0,0,1-.55-.39L263.9,377.13l-17.82-10.78a2,2,0,0,1-.85-1l-5.84-14.94L227,343.23a2,2,0,0,1-1-1.91l2.12-24.44a2.25,2.25,0,0,1,.06-.36l6.37-22.62a3.12,3.12,0,0,1,.15-.39l19.37-36.91a2.08,2.08,0,0,1,2.55-1l14.44,5.19,8.11-11a2.07,2.07,0,0,1,1.67-.84h13.26a2.14,2.14,0,0,1,1.05.28L311,258.46l46.05,8.25a2,2,0,0,1,1.68,2.28l-1.44,9.86,7.77,6.94,14.26,2.49A2,2,0,0,1,381,290.5l-1.77,15.66,2,3a1.86,1.86,0,0,1,.24.49Zm-4.29.16-11-34.56-1.69-2.58L363,314.8l-2,6a1.24,1.24,0,0,1-.95.83l-14.44,2.68-1.5,22.9,4.76,8.84,14.93,12.33-1.59,1.86-13.95-11.51-10.16,18.69a1.26,1.26,0,0,1-.7.58L313,386l3.5,17.4-2.43.47L310.4,385.4a1.22,1.22,0,0,1,.82-1.39l25-8.17,10.33-19L341.82,348a1.34,1.34,0,0,1-.14-.65l1.59-24.17a1.22,1.22,0,0,1,1-1.12l14.66-2.73,1.9-5.81a1.19,1.19,0,0,1,.63-.71l13.63-6.57,1.5-13.22c-9.32,1.94-18.89,4.09-20.77,4.81-.57,1.12-2.35,3.84-7.93,11.33a1.22,1.22,0,0,1-.34.3l-51.08,32-9.15,28.18-2.36-.74,8.11-25-6.2,4.55-20.31,16.42a1.26,1.26,0,0,1-1.71-.13l-9.29-10.2-3.89.05a1.26,1.26,0,0,1-1.22-.94l-4.24-18.2,2.41-.54,4,17.24,17.83-.25,0,2.43-11.66.16,7.06,7.76,19.43-15.71,9.34-6.87h0l.07-.06L346,307.58c3.4-4.57,7.05-9.68,7.58-10.75.08-1,1.25-1.73,19.47-5.53l-9.31-1.63a2,2,0,0,1-1-.5l-27.46,5.14-61.53,16.82L251.7,330.44a1,1,0,0,1-.24.16l-6.13,3.21-13.89,7.28,10.67,6.19a2.08,2.08,0,0,1,.88,1l5.85,15,17.44,10.56a1.72,1.72,0,0,1,.39.31l24.69,24.71,23.07,11.43,3.33-6.24,10.05-18.78a2.07,2.07,0,0,1,2.35-1l.83.21,26.19-9a2,2,0,0,1,.79-1.06l4.94-3.14,9.11-5.79ZM337,386l27.22-3.07-6.25-5.15-22.63,7.79Zm-2.24-94,25.74-4.82-6.74-6a1.87,1.87,0,0,1-.4-.49,2,2,0,0,1-.25-1.29l1.32-9-44.47-8a2.06,2.06,0,0,1-.68-.25l-15.7-9.08H281.9l-7.47,10.13,26.88,13.43,24.4-4.68.23,0a1.23,1.23,0,0,1,.42.07l26.25,9.1-.82,2.29-25.94-9-21,4,8.62,4.31a1.23,1.23,0,0,1,.67,1,1.2,1.2,0,0,1-.54,1.08l-33.47,22.07ZM272.46,309l38.05-25.1-37.8-18.88a2.11,2.11,0,0,1-1.6.1l-14.19-5.1-18.44,35.13-6.25,22.23-1.87,21.5,19.8-10.38Z" transform="translate(-226 -249)"/><path className="cls-3-wad2" d="M377.63,311.16l11,34.56L372,365.44l-9.11,5.79-.63-1,1.59-1.86-14.93-12.33-4.76-8.84,1.5-22.9,14.44-2.68a1.24,1.24,0,0,0,.95-.83l2-6,12.91-6.22Z" transform="translate(-226 -249)"/><path className="cls-3-wad2" d="M376.6,293.06l-1.5,13.22-13.63,6.57a1.19,1.19,0,0,0-.63.71l-1.9,5.81-14.66,2.73a1.22,1.22,0,0,0-1,1.12l-1.59,24.17a1.34,1.34,0,0,0,.14.65l4.73,8.78-10.33,19-25,8.17a1.22,1.22,0,0,0-.82,1.39l3.71,18.45,2.43-.47,1.22.65-3.33,6.24-23.07-11.43-24.69-24.71a1.72,1.72,0,0,0-.39-.31l-17.44-10.56-5.85-15a2.08,2.08,0,0,0-.88-1l-10.67-6.19,13.89-7.28.89,1.71,4.24,18.2a1.26,1.26,0,0,0,1.22.94l3.89-.05,9.29,10.2a1.26,1.26,0,0,0,1.71.13l20.31-16.42,6.2-4.55-8.11,25,2.36.74,9.15-28.18,51.08-32a1.22,1.22,0,0,0,.34-.3c5.58-7.49,7.36-10.21,7.93-11.33C357.71,297.15,367.28,295,376.6,293.06Zm-74.84,79.21,6-16.6-2.34-.81-6.1,16.9a1.23,1.23,0,0,0-.05.63l2.12,11.18,2.44-.45Z" transform="translate(-226 -249)"/><path className="cls-3-wad2" d="M363.77,289.67l9.31,1.63c-18.22,3.8-19.39,4.53-19.47,5.53-.53,1.07-4.18,6.18-7.58,10.75l-51.26,32.11-.07.06h0l-9.34,6.87-19.43,15.71-7.06-7.76,11.66-.16,0-2.43-17.83.25-4-17.24-2.41.54-.89-1.71,6.13-3.21a1,1,0,0,0,.24-.16l22.06-19.31,61.53-16.82,27.46-5.14A2,2,0,0,0,363.77,289.67Z" transform="translate(-226 -249)"/><polygon className="cls-3-wad2" points="138.18 133.9 110.96 136.97 109.3 136.54 131.93 128.75 138.18 133.9"/><path className="cls-3-wad2" d="M362.28,370.24l.63,1L358,374.37a2,2,0,0,0-.79,1.06l-26.19,9-.83-.21a2.07,2.07,0,0,0-2.35,1L317.76,404l-1.22-.65L313,386l24.43-8a1.26,1.26,0,0,0,.7-.58l10.16-18.69Z" transform="translate(-226 -249)"/><path className="cls-3-wad2" d="M360.46,287.13,334.72,292l-54.55,14.91,33.47-22.07a1.2,1.2,0,0,0,.54-1.08,1.23,1.23,0,0,0-.67-1l-8.62-4.31,21-4,25.94,9,.82-2.29.71-.45a1.87,1.87,0,0,0,.4.49Z" transform="translate(-226 -249)"/><path className="cls-3-wad2" d="M354.39,270.34l-1.32,9a2,2,0,0,0,.25,1.29l-.71.45L326.36,272a1.23,1.23,0,0,0-.42-.07l-.23,0-24.4,4.68-26.88-13.43,7.47-10.13h11.64l15.7,9.08a2.06,2.06,0,0,0,.68.25Z" transform="translate(-226 -249)"/><path className="cls-3-wad2" d="M310.51,283.93,272.46,309l-22.3,19.5-19.8,10.38,1.87-21.5,6.25-22.23,18.44-35.13,14.19,5.1a2.11,2.11,0,0,0,1.6-.1Z" transform="translate(-226 -249)"/><path className="cls-2-wad2" d="M307.75,355.67l-6,16.6,2.06,10.85-2.44.45-2.12-11.18a1.23,1.23,0,0,1,.05-.63l6.1-16.9Z" transform="translate(-226 -249)"/></g></svg>


<svg className="wad3" id="Layer_2" data-name="Layer 2" height='80px' width='80px' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 167 166" x="140px" y="180px"><defs><style></style></defs><g className="cls-1-wad3"><path className="cls-2-wad3" d="M392.91,345.56a2,2,0,0,1-.39,1.89L375,368.26a2.07,2.07,0,0,1-.47.41l-12,7.61,7.94,6.55a2,2,0,0,1,.65,2.13,2,2,0,0,1-1.74,1.43L337.05,390a2.17,2.17,0,0,1-.76,0l-5.57-1.42-13.56,25.35a2.09,2.09,0,0,1-2.76.87L289.2,402.3a1.9,1.9,0,0,1-.55-.39L263.9,377.13l-17.82-10.78a2,2,0,0,1-.85-1l-5.84-14.94L227,343.23a2,2,0,0,1-1-1.91l2.12-24.44a2.25,2.25,0,0,1,.06-.36l6.37-22.62a3.12,3.12,0,0,1,.15-.39l19.37-36.91a2.08,2.08,0,0,1,2.55-1l14.44,5.19,8.11-11a2.07,2.07,0,0,1,1.67-.84h13.26a2.14,2.14,0,0,1,1.05.28L311,258.46l46.05,8.25a2,2,0,0,1,1.68,2.28l-1.44,9.86,7.77,6.94,14.26,2.49A2,2,0,0,1,381,290.5l-1.77,15.66,2,3a1.86,1.86,0,0,1,.24.49Zm-4.29.16-11-34.56-1.69-2.58L363,314.8l-2,6a1.24,1.24,0,0,1-.95.83l-14.44,2.68-1.5,22.9,4.76,8.84,14.93,12.33-1.59,1.86-13.95-11.51-10.16,18.69a1.26,1.26,0,0,1-.7.58L313,386l3.5,17.4-2.43.47L310.4,385.4a1.22,1.22,0,0,1,.82-1.39l25-8.17,10.33-19L341.82,348a1.34,1.34,0,0,1-.14-.65l1.59-24.17a1.22,1.22,0,0,1,1-1.12l14.66-2.73,1.9-5.81a1.19,1.19,0,0,1,.63-.71l13.63-6.57,1.5-13.22c-9.32,1.94-18.89,4.09-20.77,4.81-.57,1.12-2.35,3.84-7.93,11.33a1.22,1.22,0,0,1-.34.3l-51.08,32-9.15,28.18-2.36-.74,8.11-25-6.2,4.55-20.31,16.42a1.26,1.26,0,0,1-1.71-.13l-9.29-10.2-3.89.05a1.26,1.26,0,0,1-1.22-.94l-4.24-18.2,2.41-.54,4,17.24,17.83-.25,0,2.43-11.66.16,7.06,7.76,19.43-15.71,9.34-6.87h0l.07-.06L346,307.58c3.4-4.57,7.05-9.68,7.58-10.75.08-1,1.25-1.73,19.47-5.53l-9.31-1.63a2,2,0,0,1-1-.5l-27.46,5.14-61.53,16.82L251.7,330.44a1,1,0,0,1-.24.16l-6.13,3.21-13.89,7.28,10.67,6.19a2.08,2.08,0,0,1,.88,1l5.85,15,17.44,10.56a1.72,1.72,0,0,1,.39.31l24.69,24.71,23.07,11.43,3.33-6.24,10.05-18.78a2.07,2.07,0,0,1,2.35-1l.83.21,26.19-9a2,2,0,0,1,.79-1.06l4.94-3.14,9.11-5.79ZM337,386l27.22-3.07-6.25-5.15-22.63,7.79Zm-2.24-94,25.74-4.82-6.74-6a1.87,1.87,0,0,1-.4-.49,2,2,0,0,1-.25-1.29l1.32-9-44.47-8a2.06,2.06,0,0,1-.68-.25l-15.7-9.08H281.9l-7.47,10.13,26.88,13.43,24.4-4.68.23,0a1.23,1.23,0,0,1,.42.07l26.25,9.1-.82,2.29-25.94-9-21,4,8.62,4.31a1.23,1.23,0,0,1,.67,1,1.2,1.2,0,0,1-.54,1.08l-33.47,22.07ZM272.46,309l38.05-25.1-37.8-18.88a2.11,2.11,0,0,1-1.6.1l-14.19-5.1-18.44,35.13-6.25,22.23-1.87,21.5,19.8-10.38Z" transform="translate(-226 -249)"/><path className="cls-3-wad3" d="M377.63,311.16l11,34.56L372,365.44l-9.11,5.79-.63-1,1.59-1.86-14.93-12.33-4.76-8.84,1.5-22.9,14.44-2.68a1.24,1.24,0,0,0,.95-.83l2-6,12.91-6.22Z" transform="translate(-226 -249)"/><path className="cls-3-wad3" d="M376.6,293.06l-1.5,13.22-13.63,6.57a1.19,1.19,0,0,0-.63.71l-1.9,5.81-14.66,2.73a1.22,1.22,0,0,0-1,1.12l-1.59,24.17a1.34,1.34,0,0,0,.14.65l4.73,8.78-10.33,19-25,8.17a1.22,1.22,0,0,0-.82,1.39l3.71,18.45,2.43-.47,1.22.65-3.33,6.24-23.07-11.43-24.69-24.71a1.72,1.72,0,0,0-.39-.31l-17.44-10.56-5.85-15a2.08,2.08,0,0,0-.88-1l-10.67-6.19,13.89-7.28.89,1.71,4.24,18.2a1.26,1.26,0,0,0,1.22.94l3.89-.05,9.29,10.2a1.26,1.26,0,0,0,1.71.13l20.31-16.42,6.2-4.55-8.11,25,2.36.74,9.15-28.18,51.08-32a1.22,1.22,0,0,0,.34-.3c5.58-7.49,7.36-10.21,7.93-11.33C357.71,297.15,367.28,295,376.6,293.06Zm-74.84,79.21,6-16.6-2.34-.81-6.1,16.9a1.23,1.23,0,0,0-.05.63l2.12,11.18,2.44-.45Z" transform="translate(-226 -249)"/><path className="cls-3-wad3" d="M363.77,289.67l9.31,1.63c-18.22,3.8-19.39,4.53-19.47,5.53-.53,1.07-4.18,6.18-7.58,10.75l-51.26,32.11-.07.06h0l-9.34,6.87-19.43,15.71-7.06-7.76,11.66-.16,0-2.43-17.83.25-4-17.24-2.41.54-.89-1.71,6.13-3.21a1,1,0,0,0,.24-.16l22.06-19.31,61.53-16.82,27.46-5.14A2,2,0,0,0,363.77,289.67Z" transform="translate(-226 -249)"/><polygon className="cls-3-wad3" points="138.18 133.9 110.96 136.97 109.3 136.54 131.93 128.75 138.18 133.9"/><path className="cls-3-wad3" d="M362.28,370.24l.63,1L358,374.37a2,2,0,0,0-.79,1.06l-26.19,9-.83-.21a2.07,2.07,0,0,0-2.35,1L317.76,404l-1.22-.65L313,386l24.43-8a1.26,1.26,0,0,0,.7-.58l10.16-18.69Z" transform="translate(-226 -249)"/><path className="cls-3-wad3" d="M360.46,287.13,334.72,292l-54.55,14.91,33.47-22.07a1.2,1.2,0,0,0,.54-1.08,1.23,1.23,0,0,0-.67-1l-8.62-4.31,21-4,25.94,9,.82-2.29.71-.45a1.87,1.87,0,0,0,.4.49Z" transform="translate(-226 -249)"/><path className="cls-3-wad3" d="M354.39,270.34l-1.32,9a2,2,0,0,0,.25,1.29l-.71.45L326.36,272a1.23,1.23,0,0,0-.42-.07l-.23,0-24.4,4.68-26.88-13.43,7.47-10.13h11.64l15.7,9.08a2.06,2.06,0,0,0,.68.25Z" transform="translate(-226 -249)"/><path className="cls-3-wad3" d="M310.51,283.93,272.46,309l-22.3,19.5-19.8,10.38,1.87-21.5,6.25-22.23,18.44-35.13,14.19,5.1a2.11,2.11,0,0,0,1.6-.1Z" transform="translate(-226 -249)"/><path className="cls-2-wad3" d="M307.75,355.67l-6,16.6,2.06,10.85-2.44.45-2.12-11.18a1.23,1.23,0,0,1,.05-.63l6.1-16.9Z" transform="translate(-226 -249)"/></g></svg>


<svg className="wad4" id="Layer_2" data-name="Layer 2" height='150px' width='150px' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 167 166" x="68px" y="220px"><defs><style></style></defs><g className="cls-1-wad4"><path className="cls-2-wad4" d="M392.91,345.56a2,2,0,0,1-.39,1.89L375,368.26a2.07,2.07,0,0,1-.47.41l-12,7.61,7.94,6.55a2,2,0,0,1,.65,2.13,2,2,0,0,1-1.74,1.43L337.05,390a2.17,2.17,0,0,1-.76,0l-5.57-1.42-13.56,25.35a2.09,2.09,0,0,1-2.76.87L289.2,402.3a1.9,1.9,0,0,1-.55-.39L263.9,377.13l-17.82-10.78a2,2,0,0,1-.85-1l-5.84-14.94L227,343.23a2,2,0,0,1-1-1.91l2.12-24.44a2.25,2.25,0,0,1,.06-.36l6.37-22.62a3.12,3.12,0,0,1,.15-.39l19.37-36.91a2.08,2.08,0,0,1,2.55-1l14.44,5.19,8.11-11a2.07,2.07,0,0,1,1.67-.84h13.26a2.14,2.14,0,0,1,1.05.28L311,258.46l46.05,8.25a2,2,0,0,1,1.68,2.28l-1.44,9.86,7.77,6.94,14.26,2.49A2,2,0,0,1,381,290.5l-1.77,15.66,2,3a1.86,1.86,0,0,1,.24.49Zm-4.29.16-11-34.56-1.69-2.58L363,314.8l-2,6a1.24,1.24,0,0,1-.95.83l-14.44,2.68-1.5,22.9,4.76,8.84,14.93,12.33-1.59,1.86-13.95-11.51-10.16,18.69a1.26,1.26,0,0,1-.7.58L313,386l3.5,17.4-2.43.47L310.4,385.4a1.22,1.22,0,0,1,.82-1.39l25-8.17,10.33-19L341.82,348a1.34,1.34,0,0,1-.14-.65l1.59-24.17a1.22,1.22,0,0,1,1-1.12l14.66-2.73,1.9-5.81a1.19,1.19,0,0,1,.63-.71l13.63-6.57,1.5-13.22c-9.32,1.94-18.89,4.09-20.77,4.81-.57,1.12-2.35,3.84-7.93,11.33a1.22,1.22,0,0,1-.34.3l-51.08,32-9.15,28.18-2.36-.74,8.11-25-6.2,4.55-20.31,16.42a1.26,1.26,0,0,1-1.71-.13l-9.29-10.2-3.89.05a1.26,1.26,0,0,1-1.22-.94l-4.24-18.2,2.41-.54,4,17.24,17.83-.25,0,2.43-11.66.16,7.06,7.76,19.43-15.71,9.34-6.87h0l.07-.06L346,307.58c3.4-4.57,7.05-9.68,7.58-10.75.08-1,1.25-1.73,19.47-5.53l-9.31-1.63a2,2,0,0,1-1-.5l-27.46,5.14-61.53,16.82L251.7,330.44a1,1,0,0,1-.24.16l-6.13,3.21-13.89,7.28,10.67,6.19a2.08,2.08,0,0,1,.88,1l5.85,15,17.44,10.56a1.72,1.72,0,0,1,.39.31l24.69,24.71,23.07,11.43,3.33-6.24,10.05-18.78a2.07,2.07,0,0,1,2.35-1l.83.21,26.19-9a2,2,0,0,1,.79-1.06l4.94-3.14,9.11-5.79ZM337,386l27.22-3.07-6.25-5.15-22.63,7.79Zm-2.24-94,25.74-4.82-6.74-6a1.87,1.87,0,0,1-.4-.49,2,2,0,0,1-.25-1.29l1.32-9-44.47-8a2.06,2.06,0,0,1-.68-.25l-15.7-9.08H281.9l-7.47,10.13,26.88,13.43,24.4-4.68.23,0a1.23,1.23,0,0,1,.42.07l26.25,9.1-.82,2.29-25.94-9-21,4,8.62,4.31a1.23,1.23,0,0,1,.67,1,1.2,1.2,0,0,1-.54,1.08l-33.47,22.07ZM272.46,309l38.05-25.1-37.8-18.88a2.11,2.11,0,0,1-1.6.1l-14.19-5.1-18.44,35.13-6.25,22.23-1.87,21.5,19.8-10.38Z" transform="translate(-226 -249)"/><path className="cls-3-wad4" d="M377.63,311.16l11,34.56L372,365.44l-9.11,5.79-.63-1,1.59-1.86-14.93-12.33-4.76-8.84,1.5-22.9,14.44-2.68a1.24,1.24,0,0,0,.95-.83l2-6,12.91-6.22Z" transform="translate(-226 -249)"/><path className="cls-3-wad4" d="M376.6,293.06l-1.5,13.22-13.63,6.57a1.19,1.19,0,0,0-.63.71l-1.9,5.81-14.66,2.73a1.22,1.22,0,0,0-1,1.12l-1.59,24.17a1.34,1.34,0,0,0,.14.65l4.73,8.78-10.33,19-25,8.17a1.22,1.22,0,0,0-.82,1.39l3.71,18.45,2.43-.47,1.22.65-3.33,6.24-23.07-11.43-24.69-24.71a1.72,1.72,0,0,0-.39-.31l-17.44-10.56-5.85-15a2.08,2.08,0,0,0-.88-1l-10.67-6.19,13.89-7.28.89,1.71,4.24,18.2a1.26,1.26,0,0,0,1.22.94l3.89-.05,9.29,10.2a1.26,1.26,0,0,0,1.71.13l20.31-16.42,6.2-4.55-8.11,25,2.36.74,9.15-28.18,51.08-32a1.22,1.22,0,0,0,.34-.3c5.58-7.49,7.36-10.21,7.93-11.33C357.71,297.15,367.28,295,376.6,293.06Zm-74.84,79.21,6-16.6-2.34-.81-6.1,16.9a1.23,1.23,0,0,0-.05.63l2.12,11.18,2.44-.45Z" transform="translate(-226 -249)"/><path className="cls-3-wad4" d="M363.77,289.67l9.31,1.63c-18.22,3.8-19.39,4.53-19.47,5.53-.53,1.07-4.18,6.18-7.58,10.75l-51.26,32.11-.07.06h0l-9.34,6.87-19.43,15.71-7.06-7.76,11.66-.16,0-2.43-17.83.25-4-17.24-2.41.54-.89-1.71,6.13-3.21a1,1,0,0,0,.24-.16l22.06-19.31,61.53-16.82,27.46-5.14A2,2,0,0,0,363.77,289.67Z" transform="translate(-226 -249)"/><polygon className="cls-3-wad4" points="138.18 133.9 110.96 136.97 109.3 136.54 131.93 128.75 138.18 133.9"/><path className="cls-3-wad4" d="M362.28,370.24l.63,1L358,374.37a2,2,0,0,0-.79,1.06l-26.19,9-.83-.21a2.07,2.07,0,0,0-2.35,1L317.76,404l-1.22-.65L313,386l24.43-8a1.26,1.26,0,0,0,.7-.58l10.16-18.69Z" transform="translate(-226 -249)"/><path className="cls-3-wad4" d="M360.46,287.13,334.72,292l-54.55,14.91,33.47-22.07a1.2,1.2,0,0,0,.54-1.08,1.23,1.23,0,0,0-.67-1l-8.62-4.31,21-4,25.94,9,.82-2.29.71-.45a1.87,1.87,0,0,0,.4.49Z" transform="translate(-226 -249)"/><path className="cls-3-wad4" d="M354.39,270.34l-1.32,9a2,2,0,0,0,.25,1.29l-.71.45L326.36,272a1.23,1.23,0,0,0-.42-.07l-.23,0-24.4,4.68-26.88-13.43,7.47-10.13h11.64l15.7,9.08a2.06,2.06,0,0,0,.68.25Z" transform="translate(-226 -249)"/><path className="cls-3-wad4" d="M310.51,283.93,272.46,309l-22.3,19.5-19.8,10.38,1.87-21.5,6.25-22.23,18.44-35.13,14.19,5.1a2.11,2.11,0,0,0,1.6-.1Z" transform="translate(-226 -249)"/><path className="cls-2-wad4" d="M307.75,355.67l-6,16.6,2.06,10.85-2.44.45-2.12-11.18a1.23,1.23,0,0,1,.05-.63l6.1-16.9Z" transform="translate(-226 -249)"/></g></svg>

<svg className="wad5" id="Layer_2" data-name="Layer 2" height='80px' width='80px' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 167 166" x="5px" y="275px"><defs></defs><g className="cls-1-wad5"><path className="cls-2-wad5" d="M392.91,345.56a2,2,0,0,1-.39,1.89L375,368.26a2.07,2.07,0,0,1-.47.41l-12,7.61,7.94,6.55a2,2,0,0,1,.65,2.13,2,2,0,0,1-1.74,1.43L337.05,390a2.17,2.17,0,0,1-.76,0l-5.57-1.42-13.56,25.35a2.09,2.09,0,0,1-2.76.87L289.2,402.3a1.9,1.9,0,0,1-.55-.39L263.9,377.13l-17.82-10.78a2,2,0,0,1-.85-1l-5.84-14.94L227,343.23a2,2,0,0,1-1-1.91l2.12-24.44a2.25,2.25,0,0,1,.06-.36l6.37-22.62a3.12,3.12,0,0,1,.15-.39l19.37-36.91a2.08,2.08,0,0,1,2.55-1l14.44,5.19,8.11-11a2.07,2.07,0,0,1,1.67-.84h13.26a2.14,2.14,0,0,1,1.05.28L311,258.46l46.05,8.25a2,2,0,0,1,1.68,2.28l-1.44,9.86,7.77,6.94,14.26,2.49A2,2,0,0,1,381,290.5l-1.77,15.66,2,3a1.86,1.86,0,0,1,.24.49Zm-4.29.16-11-34.56-1.69-2.58L363,314.8l-2,6a1.24,1.24,0,0,1-.95.83l-14.44,2.68-1.5,22.9,4.76,8.84,14.93,12.33-1.59,1.86-13.95-11.51-10.16,18.69a1.26,1.26,0,0,1-.7.58L313,386l3.5,17.4-2.43.47L310.4,385.4a1.22,1.22,0,0,1,.82-1.39l25-8.17,10.33-19L341.82,348a1.34,1.34,0,0,1-.14-.65l1.59-24.17a1.22,1.22,0,0,1,1-1.12l14.66-2.73,1.9-5.81a1.19,1.19,0,0,1,.63-.71l13.63-6.57,1.5-13.22c-9.32,1.94-18.89,4.09-20.77,4.81-.57,1.12-2.35,3.84-7.93,11.33a1.22,1.22,0,0,1-.34.3l-51.08,32-9.15,28.18-2.36-.74,8.11-25-6.2,4.55-20.31,16.42a1.26,1.26,0,0,1-1.71-.13l-9.29-10.2-3.89.05a1.26,1.26,0,0,1-1.22-.94l-4.24-18.2,2.41-.54,4,17.24,17.83-.25,0,2.43-11.66.16,7.06,7.76,19.43-15.71,9.34-6.87h0l.07-.06L346,307.58c3.4-4.57,7.05-9.68,7.58-10.75.08-1,1.25-1.73,19.47-5.53l-9.31-1.63a2,2,0,0,1-1-.5l-27.46,5.14-61.53,16.82L251.7,330.44a1,1,0,0,1-.24.16l-6.13,3.21-13.89,7.28,10.67,6.19a2.08,2.08,0,0,1,.88,1l5.85,15,17.44,10.56a1.72,1.72,0,0,1,.39.31l24.69,24.71,23.07,11.43,3.33-6.24,10.05-18.78a2.07,2.07,0,0,1,2.35-1l.83.21,26.19-9a2,2,0,0,1,.79-1.06l4.94-3.14,9.11-5.79ZM337,386l27.22-3.07-6.25-5.15-22.63,7.79Zm-2.24-94,25.74-4.82-6.74-6a1.87,1.87,0,0,1-.4-.49,2,2,0,0,1-.25-1.29l1.32-9-44.47-8a2.06,2.06,0,0,1-.68-.25l-15.7-9.08H281.9l-7.47,10.13,26.88,13.43,24.4-4.68.23,0a1.23,1.23,0,0,1,.42.07l26.25,9.1-.82,2.29-25.94-9-21,4,8.62,4.31a1.23,1.23,0,0,1,.67,1,1.2,1.2,0,0,1-.54,1.08l-33.47,22.07ZM272.46,309l38.05-25.1-37.8-18.88a2.11,2.11,0,0,1-1.6.1l-14.19-5.1-18.44,35.13-6.25,22.23-1.87,21.5,19.8-10.38Z" transform="translate(-226 -249)"/><path className="cls-3-wad5" d="M377.63,311.16l11,34.56L372,365.44l-9.11,5.79-.63-1,1.59-1.86-14.93-12.33-4.76-8.84,1.5-22.9,14.44-2.68a1.24,1.24,0,0,0,.95-.83l2-6,12.91-6.22Z" transform="translate(-226 -249)"/><path className="cls-3-wad5" d="M376.6,293.06l-1.5,13.22-13.63,6.57a1.19,1.19,0,0,0-.63.71l-1.9,5.81-14.66,2.73a1.22,1.22,0,0,0-1,1.12l-1.59,24.17a1.34,1.34,0,0,0,.14.65l4.73,8.78-10.33,19-25,8.17a1.22,1.22,0,0,0-.82,1.39l3.71,18.45,2.43-.47,1.22.65-3.33,6.24-23.07-11.43-24.69-24.71a1.72,1.72,0,0,0-.39-.31l-17.44-10.56-5.85-15a2.08,2.08,0,0,0-.88-1l-10.67-6.19,13.89-7.28.89,1.71,4.24,18.2a1.26,1.26,0,0,0,1.22.94l3.89-.05,9.29,10.2a1.26,1.26,0,0,0,1.71.13l20.31-16.42,6.2-4.55-8.11,25,2.36.74,9.15-28.18,51.08-32a1.22,1.22,0,0,0,.34-.3c5.58-7.49,7.36-10.21,7.93-11.33C357.71,297.15,367.28,295,376.6,293.06Zm-74.84,79.21,6-16.6-2.34-.81-6.1,16.9a1.23,1.23,0,0,0-.05.63l2.12,11.18,2.44-.45Z" transform="translate(-226 -249)"/><path className="cls-3-wad5" d="M363.77,289.67l9.31,1.63c-18.22,3.8-19.39,4.53-19.47,5.53-.53,1.07-4.18,6.18-7.58,10.75l-51.26,32.11-.07.06h0l-9.34,6.87-19.43,15.71-7.06-7.76,11.66-.16,0-2.43-17.83.25-4-17.24-2.41.54-.89-1.71,6.13-3.21a1,1,0,0,0,.24-.16l22.06-19.31,61.53-16.82,27.46-5.14A2,2,0,0,0,363.77,289.67Z" transform="translate(-226 -249)"/><polygon className="cls-3-wad5" points="138.18 133.9 110.96 136.97 109.3 136.54 131.93 128.75 138.18 133.9"/><path className="cls-3-wad5" d="M362.28,370.24l.63,1L358,374.37a2,2,0,0,0-.79,1.06l-26.19,9-.83-.21a2.07,2.07,0,0,0-2.35,1L317.76,404l-1.22-.65L313,386l24.43-8a1.26,1.26,0,0,0,.7-.58l10.16-18.69Z" transform="translate(-226 -249)"/><path className="cls-3-wad5" d="M360.46,287.13,334.72,292l-54.55,14.91,33.47-22.07a1.2,1.2,0,0,0,.54-1.08,1.23,1.23,0,0,0-.67-1l-8.62-4.31,21-4,25.94,9,.82-2.29.71-.45a1.87,1.87,0,0,0,.4.49Z" transform="translate(-226 -249)"/><path className="cls-3-wad5" d="M354.39,270.34l-1.32,9a2,2,0,0,0,.25,1.29l-.71.45L326.36,272a1.23,1.23,0,0,0-.42-.07l-.23,0-24.4,4.68-26.88-13.43,7.47-10.13h11.64l15.7,9.08a2.06,2.06,0,0,0,.68.25Z" transform="translate(-226 -249)"/><path className="cls-3-wad5" d="M310.51,283.93,272.46,309l-22.3,19.5-19.8,10.38,1.87-21.5,6.25-22.23,18.44-35.13,14.19,5.1a2.11,2.11,0,0,0,1.6-.1Z" transform="translate(-226 -249)"/><path className="cls-2-wad5" d="M307.75,355.67l-6,16.6,2.06,10.85-2.44.45-2.12-11.18a1.23,1.23,0,0,1,.05-.63l6.1-16.9Z" transform="translate(-226 -249)"/></g></svg>

<svg className="wad6" id="Layer_2" data-name="Layer 2" height='100px' width='100px' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 167 166" x="125px" y="100px"><defs></defs><g className="cls-1-wad6"><polygon className="cls-2-wad6" points="138.18 133.9 110.96 136.97 109.3 136.54 131.93 128.75 138.18 133.9"/><path className="cls-2-wad6" d="M362.28,370.24l.63,1L358,374.37a2,2,0,0,0-.79,1.06l-26.19,9-.83-.21a2.07,2.07,0,0,0-2.35,1L317.76,404l-1.22-.65L313,386l24.43-8a1.26,1.26,0,0,0,.7-.58l10.16-18.69Z" transform="translate(-226 -249)"/><path className="cls-2-wad6" d="M353.07,279.34a2,2,0,0,0,.25,1.29l-.71.45L326.36,272a1.23,1.23,0,0,0-.42-.07l-.23,0-24.4,4.68-26.88-13.43,7.47-10.13h11.64l15.7,9.08a2.06,2.06,0,0,0,.68.25l44.47,8Z" transform="translate(-226 -249)"/><path className="cls-2-wad6" d="M353.72,281.12l6.74,6L334.72,292l-54.55,14.91,33.47-22.07a1.2,1.2,0,0,0,.54-1.08,1.23,1.23,0,0,0-.67-1l-8.62-4.31,21-4,25.94,9,.82-2.29.71-.45A1.87,1.87,0,0,0,353.72,281.12Z" transform="translate(-226 -249)"/><path className="cls-2-wad6" d="M310.51,283.93,272.46,309l-22.3,19.5-19.8,10.38,1.87-21.5,6.25-22.23,18.44-35.13,14.19,5.1a2.11,2.11,0,0,0,1.6-.1Z" transform="translate(-226 -249)"/><path className="cls-2-wad6" d="M363.87,368.38l-14.93-12.33-4.76-8.84,1.5-22.9,14.44-2.68a1.24,1.24,0,0,0,.95-.83l2-6,12.91-6.22,1.69,2.58,11,34.56L372,365.44l-9.11,5.79-.63-1Z" transform="translate(-226 -249)"/><path className="cls-2-wad6" d="M376.6,293.06l-1.5,13.22-13.63,6.57a1.19,1.19,0,0,0-.63.71l-1.9,5.81-14.66,2.73a1.22,1.22,0,0,0-1,1.12l-1.59,24.17a1.34,1.34,0,0,0,.14.65l4.73,8.78-10.33,19-25,8.17a1.22,1.22,0,0,0-.82,1.39l3.71,18.45,2.43-.47,1.22.65-3.33,6.24-23.07-11.43-24.69-24.71a1.72,1.72,0,0,0-.39-.31l-17.44-10.56-5.85-15a2.08,2.08,0,0,0-.88-1l-10.67-6.19,13.89-7.28.89,1.71,4.24,18.2a1.26,1.26,0,0,0,1.22.94l3.89-.05,9.29,10.2a1.26,1.26,0,0,0,1.71.13l20.31-16.42,6.2-4.55-8.11,25,2.36.74,9.15-28.18,51.08-32a1.22,1.22,0,0,0,.34-.3c5.58-7.49,7.36-10.21,7.93-11.33C357.71,297.15,367.28,295,376.6,293.06Zm-74.84,79.21,6-16.6-2.34-.81-6.1,16.9a1.23,1.23,0,0,0-.05.63l2.12,11.18,2.44-.45Z" transform="translate(-226 -249)"/><path className="cls-2-wad6" d="M245.33,333.81l6.13-3.21a1,1,0,0,0,.24-.16l22.06-19.31,61.53-16.82,27.46-5.14a2,2,0,0,0,1,.5l9.31,1.63c-18.22,3.8-19.39,4.53-19.47,5.53-.53,1.07-4.18,6.18-7.58,10.75l-51.26,32.11-.07.06h0l-9.34,6.87-19.43,15.71-7.06-7.76,11.66-.16,0-2.43-17.83.25-4-17.24-2.41.54Z" transform="translate(-226 -249)"/><path className="cls-3-wad6" d="M301.76,372.27l2.06,10.85-2.44.45-2.12-11.18a1.23,1.23,0,0,1,.05-.63l6.1-16.9,2.34.81Z" transform="translate(-226 -249)"/><path className="cls-4-wad6" d="M357.93,377.75l-22.63,7.79L337,386l27.22-3.07ZM313.51,282.7a1.23,1.23,0,0,1,.67,1,1.2,1.2,0,0,1-.54,1.08l-33.47,22.07L334.72,292l25.74-4.82-6.74-6a1.87,1.87,0,0,1-.4-.49,2,2,0,0,1-.25-1.29l1.32-9-44.47-8a2.06,2.06,0,0,1-.68-.25l-15.7-9.08H281.9l-7.47,10.13,26.88,13.43,24.4-4.68.23,0a1.23,1.23,0,0,1,.42.07l26.25,9.1-.82,2.29-25.94-9-21,4Zm-63.35,45.83,22.3-19.5,38.05-25.1-37.8-18.88a2.11,2.11,0,0,1-1.6.1l-14.19-5.1-18.44,35.13-6.25,22.23-1.87,21.5Zm5.41,26.08-3.89.05a1.26,1.26,0,0,1-1.22-.94l-4.24-18.2,2.41-.54,4,17.24,17.83-.25,0,2.43-11.66.16,7.06,7.76,19.43-15.71,9.34-6.87h0l.07-.06L346,307.58c3.4-4.57,7.05-9.68,7.58-10.75.08-1,1.25-1.73,19.47-5.53l-9.31-1.63a2,2,0,0,1-1-.5l-27.46,5.14-61.53,16.82L251.7,330.44a1,1,0,0,1-.24.16l-6.13,3.21-13.89,7.28,10.67,6.19a2.08,2.08,0,0,1,.88,1l5.85,15,17.44,10.56a1.72,1.72,0,0,1,.39.31l24.69,24.71,23.07,11.43,3.33-6.24,10.05-18.78a2.07,2.07,0,0,1,2.35-1l.83.21,26.19-9a2,2,0,0,1,.79-1.06l4.94-3.14,9.11-5.79,16.6-19.72-11-34.56-1.69-2.58L363,314.8l-2,6a1.24,1.24,0,0,1-.95.83l-14.44,2.68-1.5,22.9,4.76,8.84,14.93,12.33-1.59,1.86-13.95-11.51-10.16,18.69a1.26,1.26,0,0,1-.7.58L313,386l3.5,17.4-2.43.47L310.4,385.4a1.22,1.22,0,0,1,.82-1.39l25-8.17,10.33-19L341.82,348a1.34,1.34,0,0,1-.14-.65l1.59-24.17a1.22,1.22,0,0,1,1-1.12l14.66-2.73,1.9-5.81a1.19,1.19,0,0,1,.63-.71l13.63-6.57,1.5-13.22c-9.32,1.94-18.89,4.09-20.77,4.81-.57,1.12-2.35,3.84-7.93,11.33a1.22,1.22,0,0,1-.34.3l-51.08,32-9.15,28.18-2.36-.74,8.11-25-6.2,4.55-20.31,16.42a1.26,1.26,0,0,1-1.71-.13Zm137.34-9.05a2,2,0,0,1-.39,1.89L375,368.26a2.07,2.07,0,0,1-.47.41l-12,7.61,7.94,6.55a2,2,0,0,1,.65,2.13,2,2,0,0,1-1.74,1.43L337.05,390a2.17,2.17,0,0,1-.76,0l-5.57-1.42-13.56,25.35a2.09,2.09,0,0,1-2.76.87L289.2,402.3a1.9,1.9,0,0,1-.55-.39L263.9,377.13l-17.82-10.78a2,2,0,0,1-.85-1l-5.84-14.94L227,343.23a2,2,0,0,1-1-1.91l2.12-24.44a2.25,2.25,0,0,1,.06-.36l6.37-22.62a3.12,3.12,0,0,1,.15-.39l19.37-36.91a2.08,2.08,0,0,1,2.55-1l14.44,5.19,8.11-11a2.07,2.07,0,0,1,1.67-.84h13.26a2.14,2.14,0,0,1,1.05.28L311,258.46l46.05,8.25a2,2,0,0,1,1.68,2.28l-1.44,9.86,7.77,6.94,14.26,2.49A2,2,0,0,1,381,290.5l-1.77,15.66,2,3a1.86,1.86,0,0,1,.24.49Z" transform="translate(-226 -249)"/></g></svg>
<svg>
<path id="Layer-2" data-name="Layer 2" className="cls-1-label" d="M208.18,285.61C263,290.2,317.78,291,372.63,286c-19.66,7.1-40.22,7.25-60.67,8.15l.11,1.68,73.19-4.13.26,1.51c-9.82,1.85-19.56,4.52-29.45,5.4a696.79,696.79,0,0,1-127.23-.08c-7.78-.73-15.41-3.08-23.11-4.68l.28-1.79,64.75,2.73C249.79,292.29,228.57,291.88,208.18,285.61Z" transform="translate(-181.79 -224.01)"/><path className="cls-1-label" d="M302.24,280c-10.32,5.3-76.17.5-97.29-7.09Z" transform="translate(-181.79 -224.01)"/><path className="cls-1-label" d="M302.83,272c23.61-1,47.23-2.12,70.87-2.1l.36,2.28c-1.36.53-2.69,1.39-4.09,1.55a313,313,0,0,1-64.26.43,16.32,16.32,0,0,1-3-.85Z" transform="translate(-181.79 -224.01)"/><path className="cls-1-label" d="M296.87,266c-27.46,6.44-54.55,1.63-81.64-3l.06-1.34Z" transform="translate(-181.79 -224.01)"/><path className="cls-1-label" d="M320.63,262.17l63-4.14.09,1.34c-20.53,8.34-41.69,7.53-63,5.06Z" transform="translate(-181.79 -224.01)"/><path className="cls-1-label" d="M267.48,247.7c-2.4,0-5.53,1-7.05-.21-3-2.3-5.39,3.17-8.6-.28-1.34-1.44-5.72.09-8.71,0a24.8,24.8,0,0,1-9.31-1.91h33.43Z" transform="translate(-181.79 -224.01)"/><path className="cls-1-label" d="M338.4,245.33h25.21l.06,1.4c-4.09.18-8.17.43-12.27.51-4.33.09-8.67,0-13,0Z" transform="translate(-181.79 -224.01)"/>

<path d="M214.68,385.93c6.72,0,13.33.19,19.93-.12a8.13,8.13,0,0,0,5.33-2.56c29.53-35.86,88.6-35.83,118.22.06a8.24,8.24,0,0,0,5.34,2.51c5.63.32,11.28.11,17.68.11v56c-5.45,0-11.54-.19-17.6.12a8.25,8.25,0,0,0-5.44,2.46c-16.5,20-38.23,27.61-63.35,26.52-22.14-1-41-9.23-55.19-26.89-1-1.28-3.34-2-5.09-2.11-6.47-.25-13-.1-19.83-.1Z" transform="translate(-181.79 -224.01)"/><rect className="cls-2-label" x="6.3" y="160.88" width="217" height="57.05"/><text id="jar-text" x="50%" y="52.5%" textAnchor="middle" fill="white">{props.theme}</text></svg>
</svg>
</svg>
</center>
</>
  )
}


export default ShakerAnim





