import frappe

@frappe.whitelist(allow_guest=True)
def get_social_media():
    branding = frappe.get_single("LMS Branding")
    socials = [key for key in branding.as_dict().keys() if key.endswith('_url')]
    return [{
                "name": branding.get_label_from_fieldname(social),
                "url": branding.get(social, default='')
            }
            for social in socials]

@frappe.whitelist(allow_guest=True)
def get_contact_email():
    branding = frappe.get_single("LMS Branding")
    return {'contact_email': branding.get('contact_email', default='')}
