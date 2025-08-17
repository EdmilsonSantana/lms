# Copyright (c) 2025, Frappe and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document
import frappe

class SellerContact(Document):
	
	def db_insert(self, *args, **kwargs):
		raise NotImplementedError

	def load_from_db(self):
		raise NotImplementedError

	def db_update(self):
		raise NotImplementedError

	def delete(self):
		raise NotImplementedError

	@staticmethod
	def get_list(filters=None, page_length=20, **kwargs):
		filters = [
			['mobile_no', 'is', 'set'],
			["Has Role", "role", "in", ["Sales Manager"]]
		]
		return frappe.db.get_all(
				"User",
				fields=['name', 'mobile_no', 'full_name'],
				filters=filters,
				page_length=page_length
		)

	@staticmethod
	def get_count(filters=None, **kwargs):
		pass

	@staticmethod
	def get_stats(**kwargs):
		pass

