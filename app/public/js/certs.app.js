var app = new Vue({
  el: '#newCertsPage',
  data: {
    ctList:[],
    activeCt: null,
    certsForm: {}
  },
  computed: {
    activeCertsName() {
<<<<<<< HEAD
      return this.activeCt ? this.activeCt.certName: ''
    }
=======
      return this.activeCt ? this.activeCt.certName : ''
    },
    activeCertsAgency() {
      return this.activeCt ? this.activeCt.certAgency : ''
    },
    activeCertsStanExp() {
      return this.activeCt ? this.activeCt.certStanExp : ''
    },
>>>>>>> adb8c7851305af3d607948e58fe8422d20c52a8a
  },
  methods: {
    newCertsData() {
      return {
        certID: '',
        certAgency: '',
        certName: '',
        certStanExp: ''
      }
    },
/*   handleNewMemberForm( evt ) {
      // evt.preventDefault();  // Redundant w/ Vue's submit.prevent

      // TODO: Validate the data!

      fetch('api/records/post.php', {
        method:'POST',
        body: JSON.stringify(this.newCtForm),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      .then( response => response.json() )
      .then( json => {
        console.log("Returned from post:", json);
        // TODO: test a result was returned!
        this.ctList.push(json[0]);
      });

      console.log("Creating (POSTing)...!");
      console.log(this.newCtForm);

      this.newCtForm = this.newCtData();
    },
    handleTriageForm( evt ) {
      console.log("Form submitted!");

      this.triageForm.ct = this.activeCt;
      console.log(this.triageForm);

    }*/
    handleCertsForm( evt ) {
      console.log("Form submitted!");

      if (!this.activeCt) {
        alert("ERROR: No member selected!");
        return false;
      }
      this.certsForm.certID = this.activeCt.certID;

    }
  },
  created() {
    fetch("api/certs/")
    .then( response => response.json() )
    .then( json => {
      this.ctList = json;

      console.log(json)}
    );
    //this.newCtForm = this.newCtData();
  }

})