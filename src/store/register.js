import { mapActions, mapGetters } from 'vuex';

export default {
  methods: mapActions(['UserLogout', 'UserInfo', 'UserLogin']),
  computed: mapGetters(['getUserName', 'getUserId', 'getUserEmail', 'getUserAuthed']),
};
