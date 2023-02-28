import { mapActions, mapGetters } from 'vuex';

export default {
  methods: mapActions(['UserLogout', 'UserInfo']),
  computed: mapGetters(['getUserName', 'getUserId', 'getUserEmail', 'getUserAuthed']),
};
