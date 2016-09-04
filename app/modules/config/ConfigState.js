
// Actions
const LOADED_CONFIG = 'AppState/LOADED_CONFIG';

const initialState: Config = {
  wifiNetwork: '',
  wifiPassword: '',
  appLinkURL: 'https://www.fbf8.com/',
  appInvitePreviewImageURL: '',
  sessionURLTemplate: 'https://www.fbf8.com/schedule/session/{slug}',
};

export default function configState(state: Config = initialState, action: Action): Config {
  if (action.type === 'LOADED_CONFIG') {
    return {
      wifiNetwork: action.config.get('wifiNetwork') || state.wifiNetwork,
      wifiPassword: action.config.get('wifiPassword') || state.wifiPassword,
      appLinkURL: action.config.get('appLinkURL') || state.appLinkURL,
      appInvitePreviewImageURL: action.config.get('appInvitePreviewImageURL') ||
        state.appInvitePreviewImageURL,
      sessionURLTemplate: action.config.get('sessionURLTemplate') ||
        state.sessionURLTemplate,
    };
  }

  return state;
}
