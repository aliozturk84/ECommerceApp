using AutoMapper;
using Radore.Services.CouponAPI.Models;
using Radore.Services.CouponAPI.Models.Dto;

namespace Radore.Services.CouponAPI
{
    public class MappingConfig
    {
        public static MapperConfiguration RegisterMaps()
        {
            var mappingConfig = new MapperConfiguration(config =>
            {
                config.CreateMap<CouponDto, Coupon>().ReverseMap();

            });

            return mappingConfig;
        }
    }
}
