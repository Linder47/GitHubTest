const URL_BASIC = 'https://api.github.com';

export default {
  userUrl: name => [URL_BASIC, 'users', name, 'repos'].join('/'),
  orgUrl: name => [URL_BASIC, 'orgs', name, 'repos'].join('/'),
};
