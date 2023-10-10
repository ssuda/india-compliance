frappe.ui.form.on("Journal Entry", {
	refresh: function(frm) {
		frm.set_query('company_address', erpnext.queries.address_query('company', 'Company'));
	}
});
