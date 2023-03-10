const renderCss = () => {
    return `
    body {
      background-color: rgba(22, 161, 177, 0.1);
    }
    
    .team-heading {
      background-color: #2727d2c1;
      color: rgb(255, 255, 255);
    }
    
    .card {
      margin: 3%;
      box-shadow: 10px 10px 30px rgb(0, 0, 0, 0.2);
    }
    
    .list-group-item {
      background-color: rgba(3, 3, 81, 0.07);
    }
    
    .list-group-item:nth-child(odd) {
      background-color: rgba(10, 2, 89, 0.1);
    }
    
    .card-header {
      background-color: #3b088d21;
    }
    
    .card-body {
      background-color: rgba(234, 255, 112, 0.044);
    }
    
    .manager {
      background-color: rgba(255, 0, 0, 0.4);
    }
    
    .engineer {
      background-color: rgba(255, 255, 0, 0.4);
    }
    
    .intern {
      background-color: rgba(0, 128, 0, 0.4);
    }
    
    .card-body {
      background-color: rgba(128, 128, 128, 0.078);
    }
    
      `;
  };
  
  module.exports = renderCss;
  