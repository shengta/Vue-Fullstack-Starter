export const INITIAL = {
  drawer: null,
  navigation: [
    { icon: 'loyalty', text: 'Overview', route: '/' },
    { icon: 'face', text: 'Hello World', route: '/hello-world' },
    {
      icon: 'business',
      text: 'CRUD Operations',
      model: false,
      children: [
        { text: 'Basic', route: '/basic' },
        { text: 'REST', route: '/rest' },
        { text: 'GraphQL', disabled: true },
      ],
    },
    {
      icon: 'contacts',
      text: 'Form Controls',
      model: false,
      children: [
        { text: 'Template-driven', route: '/form-controls/template-driven' },
        { text: 'Reactive', disabled: true },
      ],
    },
    {
      icon: 'dashboard',
      text: 'Data Table',
      model: false,
      children: [
        { text: 'Basic', disabled: true },
        { text: 'REST', disabled: true },
        { text: 'GraphQL', disabled: true },
      ],
    },
    {
      icon: 'language',
      text: 'Globalization',
      model: false,
      children: [
        { text: 'Internationalization', route: '/i18n' },
        { text: 'Localization', disabled: true },
      ],
    },
    {
      icon: 'verified_user',
      text: 'Authorization',
      model: false,
      children: [
        { text: 'REST', disabled: true },
        { text: 'GraphQL', disabled: true },
      ],
    },
    {
      icon: 'multiline_chart',
      text: 'Data Visualization',
      model: false,
      children: [
        { text: 'Chart', disabled: true },
        { text: 'Map', disabled: true },
      ],
    },
    {
      icon: 'av_timer',
      text: 'Realtime',
      model: false,
      children: [
        { text: 'Socket.IO', disabled: true },
        { text: 'GraphQL Subscriptions', disabled: true },
      ],
    },
    {
      icon: 'toys',
      text: 'Playground',
      model: false,
      children: [
        { text: 'Counter', route: '/counter' },
        { text: 'Calendar', disabled: true },
        { text: 'Media', disabled: true },
        { text: 'QR Code', disabled: true },
      ],
    },
  ],
};
