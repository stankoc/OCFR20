var app = new Vue({
  el: '#newCertsPage',
  data: {
    ctList:[],
    activeCt: null,
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
  }

})
