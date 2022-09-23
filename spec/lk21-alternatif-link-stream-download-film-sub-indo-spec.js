'use babel';

import Lk21AlternatifLinkStreamDownloadFilmSubIndo from '../lib/lk21-alternatif-link-stream-download-film-sub-indo';

// Use the command `window:run-package-specs` (cmd-alt-ctrl-p) to run specs.
//
// To run a specific `it` or `describe` block add an `f` to the front (e.g. `fit`
// or `fdescribe`). Remove the `f` to unfocus the block.

describe('Lk21AlternatifLinkStreamDownloadFilmSubIndo', () => {
  let workspaceElement, activationPromise;

  beforeEach(() => {
    workspaceElement = atom.views.getView(atom.workspace);
    activationPromise = atom.packages.activatePackage('lk21-alternatif-link-stream-download-film-sub-indo');
  });

  describe('when the lk21-alternatif-link-stream-download-film-sub-indo:toggle event is triggered', () => {
    it('hides and shows the modal panel', () => {
      // Before the activation event the view is not on the DOM, and no panel
      // has been created
      expect(workspaceElement.querySelector('.lk21-alternatif-link-stream-download-film-sub-indo')).not.toExist();

      // This is an activation event, triggering it will cause the package to be
      // activated.
      atom.commands.dispatch(workspaceElement, 'lk21-alternatif-link-stream-download-film-sub-indo:toggle');

      waitsForPromise(() => {
        return activationPromise;
      });

      runs(() => {
        expect(workspaceElement.querySelector('.lk21-alternatif-link-stream-download-film-sub-indo')).toExist();

        let lk21AlternatifLinkStreamDownloadFilmSubIndoElement = workspaceElement.querySelector('.lk21-alternatif-link-stream-download-film-sub-indo');
        expect(lk21AlternatifLinkStreamDownloadFilmSubIndoElement).toExist();

        let lk21AlternatifLinkStreamDownloadFilmSubIndoPanel = atom.workspace.panelForItem(lk21AlternatifLinkStreamDownloadFilmSubIndoElement);
        expect(lk21AlternatifLinkStreamDownloadFilmSubIndoPanel.isVisible()).toBe(true);
        atom.commands.dispatch(workspaceElement, 'lk21-alternatif-link-stream-download-film-sub-indo:toggle');
        expect(lk21AlternatifLinkStreamDownloadFilmSubIndoPanel.isVisible()).toBe(false);
      });
    });

    it('hides and shows the view', () => {
      // This test shows you an integration test testing at the view level.

      // Attaching the workspaceElement to the DOM is required to allow the
      // `toBeVisible()` matchers to work. Anything testing visibility or focus
      // requires that the workspaceElement is on the DOM. Tests that attach the
      // workspaceElement to the DOM are generally slower than those off DOM.
      jasmine.attachToDOM(workspaceElement);

      expect(workspaceElement.querySelector('.lk21-alternatif-link-stream-download-film-sub-indo')).not.toExist();

      // This is an activation event, triggering it causes the package to be
      // activated.
      atom.commands.dispatch(workspaceElement, 'lk21-alternatif-link-stream-download-film-sub-indo:toggle');

      waitsForPromise(() => {
        return activationPromise;
      });

      runs(() => {
        // Now we can test for view visibility
        let lk21AlternatifLinkStreamDownloadFilmSubIndoElement = workspaceElement.querySelector('.lk21-alternatif-link-stream-download-film-sub-indo');
        expect(lk21AlternatifLinkStreamDownloadFilmSubIndoElement).toBeVisible();
        atom.commands.dispatch(workspaceElement, 'lk21-alternatif-link-stream-download-film-sub-indo:toggle');
        expect(lk21AlternatifLinkStreamDownloadFilmSubIndoElement).not.toBeVisible();
      });
    });
  });
});
