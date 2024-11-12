import '~style.css';
import cssText from 'data-text:~style.css';
import type { PlasmoCSConfig } from 'plasmo';


export const config: PlasmoCSConfig = {
  // matches: ["https://www.plasmo.com/*"]
};

export function getShadowContainer() {
  return document.querySelector('#test-shadow').shadowRoot.querySelector('#plasmo-shadow-container');
}

export const getShadowHostId = () => 'test-shadow';

export const getStyle = () => {
  const style = document.createElement('style');

  style.textContent = cssText;
  return style;
};

const IndexPopup = () => {
  return chrome.runtime.openOptionsPage();
};

export default IndexPopup;
