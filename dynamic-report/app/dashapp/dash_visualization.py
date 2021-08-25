# -*- coding: utf-8 -*-

from os.path import join, dirname, realpath
import dash
import dash_core_components as dcc
import dash_html_components as html
import dash_table
import pandas as pd
from .templates import add_topbar, add_card
import locale

carol = Carol()
df = staging(carol).fetch_parquet()

# page base tamplate (topbar, cards and dropdown)
layout = html.Div(children=[

    add_topbar("Dynamic Report | Example"),

    html.Div(className="content", children=[
        
        html.Div(className="col-lg-12", children=[
            html.Div(className="widget", children=[

                html.H2(children='Selecione uma opção:',
                         className='widget-title'
                ),
                html.Div(className="col-lg-12 combo-container", children=[
                    dcc.Dropdown(
                        id="grafico",
                        options=[{'label':'Opção 1', 'value':'1'},
                                {'label':'Opção 2', 'value':'2'},
                                {'label':'Opção 3', 'value':'3'}],
                        value='1'
                    )
                ])
            ])
        ]),

        html.Div(id="output-container")
    ])
])



# df_plot_purchases
def get_purchases_chart(title, id, x, y):
    return html.Div(
            className="widget",
            id="purchase_chart",
            children=[
                html.H1(children=title, className='widget-title'),
                dcc.Graph(
                    id=id,
                    figure={
                        'data': [
                            {
                                'x': x,
                                'y': y,
                                'type': 'bar',
                                'name': 'Barras'
                            }
                        ]
                    }
                )
            ]
        )



def register_callbacks(dashapp):
    @dashapp.callback(
        dash.dependencies.Output('output-container', 'children'),
        [dash.dependencies.Input('grafico', 'value')])
    def update_selectable_cities(value):
        dropdown_values = []

        if value == "1":
            x = [1,2,3,4,5,6,7,8,9,10]
            y = [10,20,30,25,20,45,5,10,15,20]

            card_value1 = 50
            card_value2 = 25.30
        if value == "2":
            x = [1,2,3,4,5,6,7,8,9,10]
            y = [10,25,5,10,20,45,5,20,15,25]

            card_value1 = 18
            card_value2 = 70
        if value == "3":
            x = [1,2,3,4,5,6,7,8,9,10]
            y = [10,20,30,25,20,45,50,30,20,10]

            card_value1 = 33
            card_value2 = 66

        dropdown_values.append( \
            html.Div(className="row", children=[
                html.Div(className="col-lg-6", children=[
                    add_card("Titulo Card 1", str(card_value1))
                ]),
                html.Div(className="col-lg-6", children=[
                    add_card("Titulo Card 2", str(card_value2)+"%")
                ])
            ])
        )

        dropdown_values.append( \
            html.Div(className="row", children=[
                html.Div(className="col-lg-12", children=[
                    get_purchases_chart("Gráfico "+value, "id_grafico", x, y)
                ])   
            ])
        )
        return dropdown_values
