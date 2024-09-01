using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Radore.Web.Models;
using Radore.Web.Services.IServices;

namespace Radore.Web.Areas.Customer.Controllers
{
    [Area("Customer")]
    public class CustomerProductController : Controller
    {
        private readonly IProductService _productService;
        public IWebHostEnvironment _environment;
        
        public CustomerProductController(IProductService productService, IWebHostEnvironment environment)
        {
            _productService = productService;
            _environment = environment;
        }

        public async Task<IActionResult> ProductIndex()
        {
            List<ProductDto> list = new();
            var accesToken = await HttpContext.GetTokenAsync("acces_token");
            var response = await _productService.GetAllProductsAsync<ResponseDto>(accesToken);
            if (response !=null && response.IsSuccess)
            {
                list = JsonConvert.DeserializeObject<List<ProductDto>>(Convert.ToString(response.Result));
            }
            return View(list);
        }

        public async Task<IActionResult> ProductCreate()
        {
            return View();
        }
    }
}
