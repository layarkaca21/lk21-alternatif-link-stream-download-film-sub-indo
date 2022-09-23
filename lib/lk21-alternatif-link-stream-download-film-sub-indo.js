'use babel';

import Lk21AlternatifLinkStreamDownloadFilmSubIndoView from './lk21-alternatif-link-stream-download-film-sub-indo-view';
import { CompositeDisposable } from 'atom';

export default {

  lk21AlternatifLinkStreamDownloadFilmSubIndoView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.lk21AlternatifLinkStreamDownloadFilmSubIndoView = new Lk21AlternatifLinkStreamDownloadFilmSubIndoView(state.lk21AlternatifLinkStreamDownloadFilmSubIndoViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.lk21AlternatifLinkStreamDownloadFilmSubIndoView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'lk21-alternatif-link-stream-download-film-sub-indo:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.lk21AlternatifLinkStreamDownloadFilmSubIndoView.destroy();
  },

  serialize() {
    return {
      lk21AlternatifLinkStreamDownloadFilmSubIndoViewState: this.lk21AlternatifLinkStreamDownloadFilmSubIndoView.serialize()
    };
  },

  toggle() {
    console.log('Lk21AlternatifLinkStreamDownloadFilmSubIndo was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
