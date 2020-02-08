import Tooltip from './ui/tooltip';
import Dropdown from './ui/dropdown';
import Tabs from './ui/tabs';

const tooltip = new Tooltip(document.querySelector('.tooltip'));
tooltip.init();

const dropdown = new Dropdown(document.querySelector('.dropdown'));
dropdown.init();

const tabs = new Tabs(document.querySelector('.tabs'));
tabs.init();
