import {DianaSliderMessageBox} from './modules/dianaSlider_message.js';
import {CheckSettings} from './modules/dianaSlider_check_settings.js';
import {Images} from './modules/dianaSlider_images.js';
import {Config} from './dianaSlider_config.js';

const setting = new CheckSettings();

console.log(setting.settingsStatus);

var full = location.pathname;
var path = full.substr(full.lastIndexOf("/") + 1);
console.dir(full);

const conf = new Config();
console.log(conf.imgName);

const img = new Images();
console.log(img.loadingImages);



