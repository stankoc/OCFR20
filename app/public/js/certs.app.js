var app = new Vue({
  el: '#newCertsPage',
  data: {
    ctList:[],
    activeCt: null,
    certForm: {},
    ctmList:[],
    certMembers: [],
    newCertsForm: {}
  },
    computed: {
      activeCertsName() {
        return this.activeCt ? this.activeCt.certName : ''
    },
      activeCertsAgency() {
        return this.activeCt ? this.activeCt.certAgency : ''
    },
      activeCertsStanExp() {
        return this.activeCt ? this.activeCt.certStanExp : ''
    },
    activeCertMembers() {
      return this.activeCt ? this.activeCt.lastName : ''
    }
  },
  methods: {
    fetchCertMember(certID) {
      fetch("api/certMembers/?certID=" + certID)
        .then(response => response.json())
        .then(json => {
          this.ctmList = json;


          console.log(json)
        });

    // select all the certs where memberID is equal to this.memberform.memberID and assign it to membercerts
    },

    newCertsData() {
      return {
        certID: '',
        certAgency: '',
        certName: '',
        certStanExp: ''
      }
    },

    handleCertForm(evt) {
      console.log("Form submitted!");

      if (!this.activeCt) {
        alert("ERROR: No member selected!");
        return false;
      }
      this.certForm.certID = this.activeCt.certID;

    },

    handleNewCertsForm( evt ) {
      // evt.preventDefault();  // Redundant w/ Vue's submit.prevent

      // TODO: Validate the data!

      fetch('api/certs/post.php', {
        method:'POST',
        body: JSON.stringify(this.newCertsForm),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      .then( response => response.json() )
      .then( json => {
        console.log("Returned from post:", json);
        // TODO: test a result was returned!
        this.ctList.push(json[0]);
        this.newCertsForm = this.newCertsData();
      });

      console.log("Creating (POSTing)...!");
      console.log(this.newCertsForm);
    },

    updateCert(evt) {

      fetch("api/certs/update.php", {
        method: 'POST',
        body: JSON.stringify(this.activeCt),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
        .then(response => response.json())
        .then(json => {
          console.log("Returned from post:", json);
          // TODO: test a result was returned!
          this.ctList.push(json[0]);
          this.activeCt = this.newCertsData();
        });


    console.log("Creating (POSTing)...!");
    console.log(this.activeCt);
  },
  deleteCert(evt) {

    fetch("api/certs/delete.php", {
      method: 'POST',
      body: JSON.stringify(this.activeCt),
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      }
    })
      .then(response => response.json())

    fetch("api/certs/")
      .then(response => response.json())
      .then(json => {
        this.ctList = json;

        console.log(json)
      });
     this.newCertsForm = this.newCertsData();
    // .then(json => {
    //   console.log("Returned from post:", json);
    //   // TODO: test a result was returned!
    //   this.mbList.push(json[0]);
    //   this.newMbForm = this.newMemberData();
    // });

  console.log("Creating (POSTing)...!");
  console.log(this.activeCt);
  },

  },
  created() {
    fetch("api/certs/")
    .then( response => response.json() )
    .then( json => {
      this.ctList = json;

      console.log(json)
    });

    fetch("api/certMembers/")
      .then(response => response.json())
      .then(json=> {
        this.ctmList = json;

        console.log(json)
      });
  }

})
