import frappe
from lms.lms.utils import has_course_moderator_role, has_course_evaluator_role
from lms.www.utils import is_student


def get_context(context):
	context.no_cache = 1
	class_name = frappe.form_dict["classname"]

	context.class_info = frappe.get_doc("LMS Class", class_name)

	for course in context.class_info.courses:
		course.update(
			frappe.db.get_value(
				"LMS Course", course.course, ["name", "short_introduction", "image"], as_dict=1
			)
		)

	context.is_moderator = has_course_moderator_role()
	context.is_evaluator = has_course_evaluator_role()
	context.is_student = is_student(class_name)
