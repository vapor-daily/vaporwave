import { index } from './style';
import Audio from '@/views/components/audio';
import { ranDom, PageUtil } from "mm-tool";
import { net } from 'ym-web'
import { coreStore } from "@/store";
import { css } from '@emotion/css';

export default class {
  audio = new Audio();

  clcss = index('')

  onReady() {
    net<string>(location.origin + `/api/v1/search?q=vaporwave&page=${ranDom(1, 10)}`, {
      method: 'Get',
      mode: 'cors',
    }).then(res => {
      const { data } = JSON.parse(res)
      const png = data[ranDom(0, data.length - 1)]
      coreStore.actions.setCssName(index(png['path']))
      this.audio.onLoad({
        container: document.getElementById('player'),
        fixed: true,
        loop: true,
        audio: [{
          name: '今晚那个吗',
          artist: '幸子小姐拜托了',
          url: 'assets/今晚那个吗.mp3',
          cover: png["thumbs"]["small"]
        }]
      })
    })
  }

  render() {
    let div = <div />
    coreStore.subscribe(({ cssName }) => {
      console.log(cssName);
      (div as HTMLElement).className = cssName
    });
    return (
      <>
        {div}
      </>
    );
  }
}
