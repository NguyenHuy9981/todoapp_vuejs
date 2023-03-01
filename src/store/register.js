import { mapActions, mapGetters } from 'vuex';

export default {
  methods: mapActions(['UserLogout', 'UserInfo', 'TodoCreate']),
  computed: mapGetters(['getUserName', 'getUserId', 'getUserEmail', 'getUserAuthed', 'getTodoList', 'getTodoCount']),
};
