var app = new Vue({
  el: '#newMemberPage',
  data: {
    mbList:[],
    activeMb: null,
    memberForm: {},
    mctList:[],
    newMbForm: {}
  },
    computed: {
      activeMemberFirstName() {
        return this.activeMb ? this.activeMb.firstName : ''
    },
      activeMemberLastName() {
        return this.activeMb ? this.activeMb.lastName : ''
    },
      activeMemberRadioNum() {
        return this.activeMb ? this.activeMb.radioNumber : ''
    },
      activeMemberStationNum() {
        return this.activeMb ? this.activeMb.stationNumber : ''
    },
      activeMemberEmail() {
        return this.activeMb ? this.activeMb.email : ''
    },
      activeMemberCell() {
        return this.activeMb ? this.activeMb.cellPhoneNum : ''
    },
      activeMemberPosition() {
        return this.activeMb ? this.activeMb.position : ''
    }
  },
    // computed: {
    //   activeMemberCert() {
    //     return this.mct ? this.mct : ''
    //   }
    // },
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
    handleMemberForm( evt ) {
      console.log("Form submitted!");

      if (!this.activeMb) {
        alert("ERROR: No member selected!");
        return false;
      }
      this.memberForm.personID = this.activeMb.personID;

      }
    },
    handleNewMemberForm( evt ) {
      // evt.preventDefault();  // Redundant w/ Vue's submit.prevent

      // TODO: Validate the data!

      fetch('api/members/post.php', {
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
        this.newMbForm = this.newMemberData();
      });

      console.log("Creating (POSTing)...!");
      console.log(this.newMbForm);
    },


  created() {
    fetch("api/members/")
    .then( response => response.json() )
    .then( json => {
      this.mbList = json;

      console.log(json)}
    );
    this.newMbForm = this.newMemberData();
    // fetch("api/memberCerts/")
    //   .then( response => response.json() )
    //   .then( json => {
    //     this.mctList = json;

    //     console.log(json)}
    //   );
    //this.newMbForm = this.newMbData();
  }
  // created() {
  //   fetch("api/memberCerts/")
  //   .then( response => response.json() )
  //   .then( json => {
  //     this.mctList = json;

  //     console.log(json)}
  //   );
  //   //this.newCtForm = this.newCtData();
  // }

 })
