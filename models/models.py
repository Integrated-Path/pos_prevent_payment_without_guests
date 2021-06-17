# -*- coding: utf-8 -*-

# from odoo import models, fields, api


# class pos_prevent_payment_without_guests(models.Model):
#     _name = 'pos_prevent_payment_without_guests.pos_prevent_payment_without_guests'
#     _description = 'pos_prevent_payment_without_guests.pos_prevent_payment_without_guests'

#     name = fields.Char()
#     value = fields.Integer()
#     value2 = fields.Float(compute="_value_pc", store=True)
#     description = fields.Text()
#
#     @api.depends('value')
#     def _value_pc(self):
#         for record in self:
#             record.value2 = float(record.value) / 100
