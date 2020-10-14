var app = new Vue({
  el: '#newMemberPage',
  data: {
    mbList:[],
    activeMb: null
  },
  computed: {
    activeMemberName() {
      return this.activeMb ? this.activeMb.lastName + ', ' + this.activeMb.firstName : ''
    }
  },
  methods: {
    newMemberData() {
      return {
        personID: '',
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        st: '',
        zip: '',
        email: '',
        dob: '',
        startDate: '',
        position: '',
        gender: '',
        stationNumber: '',
        isActive: '',
        radioNumber: '',
        workPhoneNum: '',
        cellPhoneNum: '',
        homePhoneNum: ''
      }
    },
/*   handleNewMemberForm( evt ) {
      // evt.preventDefault();  // Redundant w/ Vue's submit.prevent

      // TODO: Validate the data!

      fetch('api/records/post.php', {
        method:'POST',
        body: JSON.stringify(this.newMbForm),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      .then( response => response.json() )
      .then( json => {
        console.log("Returned from post:", json);
        // TODO: test a result was returned!
        this.mbList.push(json[0]);
      });

      console.log("Creating (POSTing)...!");
      console.log(this.newMbForm);

      this.newMbForm = this.newMbData();
    },
    handleTriageForm( evt ) {
      console.log("Form submitted!");

      this.triageForm.mb = this.activeMb;
      console.log(this.triageForm);

    }*/
  }, 
  created() {
    fetch("api/members/")
    .then( response => response.json() )
    .then( json => {
      this.mbList = json;

      console.log(json)}
    );
    //this.newMbForm = this.newMbData();
  }

})
