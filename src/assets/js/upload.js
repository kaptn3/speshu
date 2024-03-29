var upload = new Vue({
  el: '#upload',
  data() {
    return {
      status: 'waiting',
      file: ''
    };
  },
  mounted() {
    const uploadArea = document.querySelector('.upload-area');
    uploadArea.addEventListener('dragover', (e) => {
      this.dragOverHandler(e, uploadArea);
    });

    uploadArea.addEventListener('drop', (e) => {
      this.dropHandler(e);
    });

    uploadArea.addEventListener('dragleave', () => {
      uploadArea.style.borderColor = '#c8c0c7';
    });
  },
  methods: {
    dragOverHandler(e, uploadArea) {
      e.preventDefault();
      uploadArea.style.borderColor = 'var(--blue)';
    },
    dropHandler(e) {
      e.preventDefault();
      this.file = e.target.files || e.dataTransfer.files;
    },
    collectData() {
      setTimeout(() => {
        this.status = 'collect'
      }, 3000);
    },
    changeFile(e) {
      this.file = e.target.files || e.dataTransfer.files;
    }
  },
  watch: {
    file() {
      this.status = 'loading';
      this.collectData();
    }
  }
});

