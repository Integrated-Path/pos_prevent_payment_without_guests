# -*- coding: utf-8 -*-
# from odoo import http


# class PosPreventPaymentWithoutGuests(http.Controller):
#     @http.route('/pos_prevent_payment_without_guests/pos_prevent_payment_without_guests/', auth='public')
#     def index(self, **kw):
#         return "Hello, world"

#     @http.route('/pos_prevent_payment_without_guests/pos_prevent_payment_without_guests/objects/', auth='public')
#     def list(self, **kw):
#         return http.request.render('pos_prevent_payment_without_guests.listing', {
#             'root': '/pos_prevent_payment_without_guests/pos_prevent_payment_without_guests',
#             'objects': http.request.env['pos_prevent_payment_without_guests.pos_prevent_payment_without_guests'].search([]),
#         })

#     @http.route('/pos_prevent_payment_without_guests/pos_prevent_payment_without_guests/objects/<model("pos_prevent_payment_without_guests.pos_prevent_payment_without_guests"):obj>/', auth='public')
#     def object(self, obj, **kw):
#         return http.request.render('pos_prevent_payment_without_guests.object', {
#             'object': obj
#         })
