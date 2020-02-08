import Tooltip from './ui/tooltip';
import Dropdown from './ui/dropdown';

const tooltip = new Tooltip(document.querySelector('.tooltip'));
const dropdown = new Dropdown(document.querySelector('.dropdown'));
tooltip.init();
dropdown.init();
