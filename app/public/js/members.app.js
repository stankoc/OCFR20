var app = new Vue({
  el: '#newMemberPage',
  data: {
    mbList: [],
    activeMb: null,
    memberForm: {},
    certForm: {},
    mctList: [],
    memberCerts: [],
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
    },
    activeMemberCerts() {
      return this.activeMb ? this.activeMb.certName : ''
    }
  },
  // computed: {
  //   activeMemberCert() {
  //     return this.mct ? this.mct : ''
  //   }
  // },
  methods: {
    fetchMemberCert(personID) {
      fetch("api/memberCerts/?personID=" + personID)
        .then(response => response.json())
        .then(json => {
          this.mctList = json;
  
  
          console.log(json)
        });
  
    // select all the certs where memberID is equal to this.memberform.memberID and assign it to membercerts
  },
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
    handleMemberForm(evt) {
      console.log("Form submitted!");

      if (!this.activeMb) {
        alert("ERROR: No member selected!");
        return false;
      }
      this.memberForm.personID = this.activeMb.personID;

    },
    deleteMember(evt) {

      fetch("api/members/delete.php", {
        method: 'POST',
        body: JSON.stringify(this.activeMb),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
        .then(response => response.json())

      fetch("api/members/")
        .then(response => response.json())
        .then(json => {
          this.mbList = json;
  
          console.log(json)
        });
       this.newMbForm = this.newMemberData();
      // .then(json => {
      //   console.log("Returned from post:", json);
      //   // TODO: test a result was returned!
      //   this.mbList.push(json[0]);
      //   this.newMbForm = this.newMemberData();
      // });

    console.log("Creating (POSTing)...!");
    console.log(this.activeMb);
    },
    updateMember(evt) {

      fetch("api/members/update.php", {
        method: 'POST',
        body: JSON.stringify(this.activeMb),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
        .then(response => response.json())
        .then(json => {
          console.log("Returned from post:", json);
          // TODO: test a result was returned!
          this.mbList.push(json[0]);  
          this.activeMb = this.newMemberData();
        });

          
    console.log("Creating (POSTing)...!");
    console.log(this.activeMb);
    },

    handleNewMemberForm(evt) {
      // evt.preventDefault();  // Redundant w/ Vue's submit.prevent

      // TODO: Validate the data!

      fetch("api/members/post.php", {
          method: 'POST',
          body: JSON.stringify(this.newMbForm),
          headers: {
            "Content-Type": "application/json; charset=utf-8"
          }
        })
        .then(response => response.json())
        .then(json => {
          console.log("Returned from post:", json);
          // TODO: test a result was returned!
          this.mbList.push(json[0]);
          this.newMbForm = this.newMemberData();
        });

      console.log("Creating (POSTing)...!");
      console.log(this.newMbForm);
    },

    // handleMemCertForm(evt) {
    //   console.log("Form submitted!");
    //
    //   if (!this.activeMb) {
    //     alert("ERROR: No member selected!");
    //     return false;
    //   }
    //   this.memberForm.personID = this.activeMb.personID;
    // },

  },
  created() {
    fetch("api/members/")
      .then(response => response.json())
      .then(json => {
        this.mbList = json;

        console.log(json)
      });
     this.newMbForm = this.newMemberData();

    fetch("api/memberCerts/")
      .then(response => response.json())
      .then(json => {
        this.mctList = json;


        console.log(json)
      });
    this.newMbForm = this.newMemberData();
    // this.memberForm.personID = this.activeMb.personID;
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
