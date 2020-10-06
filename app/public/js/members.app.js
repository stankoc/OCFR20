var app = new Vue({
  el: '#newMemberPage',
  data: {
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
  },
  computed: {
    activeMemberName() {
      return this.activePt ? this.activePt.lastName + ', ' + this.activePt.firstName : ''
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
    handleNewMemberForm( evt ) {
      // evt.preventDefault();  // Redundant w/ Vue's submit.prevent

      // TODO: Validate the data!

      fetch('api/records/post.php', {
        method:'POST',
        body: JSON.stringify(this.newPtForm),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      .then( response => response.json() )
      .then( json => {
        console.log("Returned from post:", json);
        // TODO: test a result was returned!
        this.ptList.push(json[0]);
      });

      console.log("Creating (POSTing)...!");
      console.log(this.newPtForm);

      this.newPtForm = this.newPtData();
    },
    handleTriageForm( evt ) {
      console.log("Form submitted!");

      this.triageForm.pt = this.activePt;
      console.log(this.triageForm);

    }
  },
  created() {
    fetch("api/records/")
    .then( response => response.json() )
    .then( json => {
      this.ptList = json;

      console.log(json)}
    );
    this.newPtForm = this.newPtData();
  }
})
