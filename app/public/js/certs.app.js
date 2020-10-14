var app = new Vue({
  el: '#newCertsPage',
  data: {
    ctList:[],
    activeCt: null
  },
  computed: {
    activeCertsName() {
      return this.activeCt ? this.activeCt.lastName + ', ' + this.activeCt.firstName : ''
    }
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
