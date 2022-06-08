import { globalComponent } from 'ym-web';
import router from '@/router';
import '@/views/style';
import 'APlayer/dist/APlayer.min.css';

globalComponent.use(import('@/views/components/head'), 'Head').then(() => router.init());