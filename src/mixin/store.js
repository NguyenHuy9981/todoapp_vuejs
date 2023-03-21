import {
  mapActions,
  mapGetters,
} from 'vuex';

export default {
  methods: mapActions([
    'UserLogout',
    'UserInfo',
    'TodoCreate',
    'RouterTo',
  ]),
  computed: mapGetters([
    'getUserName',
    'getUserId',
    'getUserEmail',
    'getUserAuthed',
    'getTodoList',
    'getTodoCount',
    'getTodoStatus',
    'getTodoLimit',
    'getRouterPath',
    'getRouterId',
    'getPathUrl',
    'getQueryUrl',
    'getUserRole',
    'getIsAdmin',
    'getI18n',
  ]),
};
