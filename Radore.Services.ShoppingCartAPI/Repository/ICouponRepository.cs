using Radore.Services.ShoppingCartAPI.Models.Dto;

namespace Radore.Services.ShoppingCartAPI.Repository
{
    public interface ICouponRepository
    {
        Task<CouponDto> GetCoupon(string couponName);
    }
}
