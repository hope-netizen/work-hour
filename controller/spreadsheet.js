const res = require('express/lib/response');
const Spreadsheet = require('../models/spreadsheet')

exports.getSpreadsheet = async (req, res) => {
    res.render('work', {
      pageTitle: 'work-hour'
    });
};

exports.postSpreadsheet =  async(req, res) => {
    const activity  = req.body.activity;
    const hours = req.body.hours;
    const spreadsheet =  new Spreadsheet(activity, hours);
    spreadsheet.save();
    res.redirect('/')
    
    
    
};

