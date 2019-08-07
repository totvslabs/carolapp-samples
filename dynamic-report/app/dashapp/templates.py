import dash_html_components as html

def add_topbar(title):
    content = html.Header(className="header", children=[
        html.Div(className="header__logos col-lg-9", children=[
            html.Div(className="header__logo", children=[
                html.Img(className="logo-carol",
                         src='https://raw.githubusercontent.com/totvslabs/MDMStatic/master/reports/carol--type-white.png'),
            ])
        ]),
        html.Div(id="header__title col-lg-3", className="", children=[
            html.H1(className="header__label", children=title),
            html.Div(className="class-rightbutton", children=[
                html.A("Logout", href='/logout', className="logout_btn")#,
                #html.A("Reload Data", href='/', className="logout_btn", id='reload')
            ]),
        ])
    ])

    return content

def add_card(title, value):
    template = html.Div(className="widget card", children=[
        html.Div(className="card-title", children=[
            title
        ]),
        html.Div(className="card-value", children=[
            str(value)
        ])
    ])


    return template

