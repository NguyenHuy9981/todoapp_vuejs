import en from 'element-ui/lib/locale/lang/en';
import vn from 'element-ui/lib/locale/lang/vi';
import { storageI18n } from '../plugins/storage';

const lang = {
  en,
  vn,
};

export default lang[storageI18n.get()];
