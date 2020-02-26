import {DianaSliderMessageBox} from './dianaSlider_message.js';
import {CheckSettings} from './dianaSlider_check_settings.js';

const setting = new CheckSettings();

console.log(setting.settingsStatus);

var full = location.pathname;
var path = full.substr(full.lastIndexOf("/") + 1);
console.dir(full);