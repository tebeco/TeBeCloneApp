using Microsoft.AspNetCore.Antiforgery;
using Microsoft.AspNetCore.Mvc;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddAntiforgery();
var app = builder.Build();

app.MapGet("/", (HttpContext context, IAntiforgery antiforgery) =>
{
    var redirectUrl = context.Request.Query["redirectUrl"];
    var token = antiforgery.GetAndStoreTokens(context);

    return Results.Extensions.Html($$"""
    <!doctype html>
    <html>
        <head>
            <script type="text/javascript">

            </script>
        </head>
        <body>
            <form action="/" method="POST" enctype="multipart/form-data">
                <input name="{{token.FormFieldName}}" type="hidden" value="{{token.RequestToken}}" />

                <input type="submit" style="display: block;width: 600px;height: 600px"/>
                <input type="text" name="url" value="{{redirectUrl}}" />
            </form>
        </body>
    </html>
""");
});

app.MapPost("/", ([FromForm] string url) =>
{
    return Results.Redirect(
        string.IsNullOrEmpty(url)
            ? "/"
            : url);
});

app.Run();
