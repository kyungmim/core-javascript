import {
  setStorage,
  getStorage,
  deleteStorage,
  getNode,
  clearContents,
} from './lib/index.js';

const textField = getNode('#textField');
const clear = getNode('[data-name = "clear"]');

const handleTextField = (e) => {
  const value = e.currentTarget.value;
  setStorage('text', value);
};

const handleClear = () => {
  deleteStorage('text').then(clearContents(textField));
};

textField.addEventListener('input', handleTextField);
clear.addEventListener(
  'click',
  handleClear
)(async () => {
  const data = await getStorage('text');
  textField.value = data;
})();
