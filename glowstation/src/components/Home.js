import React from "react";
import "../css/Home.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Link } from "react-router-dom";

const Home = (props) => {
  return (
    <>
     

      <div className="welcomeMessage">
            
        <h1 style={{ textTransform: "capitalize" }}>Welcome {props.name}</h1>
        <Link to="/loading2">
          <AliceCarousel
            animationDuration="600"
            autoPlay
            disableButtonsControls="true"
            autoPlayInterval="2000"
            animationType="fadeout"
            infinite="true"
          >
            <img className="advert1" src="https://lh3.googleusercontent.com/gYgp3U3BWLOBbA6lUiD5Zqkx_oV8mOtNNNn4kByIQ1PCiuICVsG6QMglP0hMjmOb45RKXZaj-v3Lpl30yI5IjiIHlcl5ZVrO2VVAiJKgxDw43ex7GlhLIo-X9Rqkvr4jwBtJ0HBk_SoXxqTE-E-oKnaC_6KVBJ9FjruMMo4CwZBgFnO5Dqvr8GbJjZd6bnKWFHPhRx7DmWvSdtAY-bemPG6xoZmM99s1V8l1tNm7S3JtMa1l9fIW_rREUs8a54RnTvHUqNYEExIpEmHWURHkP3aKDWCfnEGkVLH6DVNx3YlYRI9bM3KBVMR2z_UGNV9egB0n9KqCJHMozgnCLbZvFQKbhxmmFTafdU3IR4DXS7I4P__vKzObb4phpGwJF8B8AY8g0vIiqjLp6ikPNtvSsqRygcYhSiati_-5SDVV9YRrpy86GPqTAc4sGkfLXszstH4KwSD2SS_vf8ut3kk8sepBb5y2y-pNzGcf4l32MrG8_FAfxDGTsQrd-lTCvVsC80LVHXcZ6kHcadRSYGPIXx8SjbIUI_FD5yrwremWKi49MYDfr4NlH6oJC8WlsrcfaDIC0sQ9xtOBKpGApJLpNtSCVmaOuDVyM5eK_IsHjSj8p7KKZZ4I2p5-WMVjaqSwee413TwpS5cru44MxWxDhltf3U9fQm0kWmTbtil6Bt1lTaYKebG83ikrdcAX=w597-h895-no?authuser=0" alt="advert" />
            <img className="advert1" src="https://lh3.googleusercontent.com/bodYtZ_Ex0wM8rnupOa7u4XAvb4uLxkhKTdAooc9HV1VG-7fO8KbVmjjarq0zHcrUc9UtSzrhCzW3MwgN6bNrRv3_sWqUt0UVb3fGtFXHecG1pNfIlhRtO0KKCr2MVIa_98xBJHqxTScvo68-IroF3vZVr4O69gZi48qlgqDTAKDHGIxm1giS08O9ouGuVqax1OZFJwCJxrQTTbYfjrX8bXP3c6i0gxq_rGIEI9jwiLIQTMtTqb_oyWllD3OS85Gm3xlDDCnA69fTow6pP0HMhy70hOR61JwcXVkv8CGeXrLT8_93couw5gFEwtm06frKCPKuJBgB-Yj6XyFUj4lz2CvvhXO3JZuhK_b-sjBHW2ODf7uvhtXrja9CAsBIkuYR8X17il-0k3yQ-fI0aatW42XG3E3q21zSiFKSXJ1pe9YT8Ro96jE0Ma5M0cQqEh_x75gktGIHBFdOIJEpWADgvZi0T9c41DEpv2xLZ9AG3hELQvLKxX87t5BiP4hQqMV0NmNA226_jQGQ3UkVSAjJqvSi0-pbc0gmD9p0uG27laWSy1anR3fLZN08Mc6TfdKzfss9Pi9_mq4dD-ioTK-p_JE_wmdf1h_NaLpXNiKi1tTreZrLTk83jKSC2a1wey0U-lvuRH0IJC4dxRGHsXa6ZclQ_zm0paz5gKpWQrcZfkIz1eJppvMXQZTn3Ug=w658-h895-no?authuser=0" alt="advert" />
            <img className="advert1" src="https://lh3.googleusercontent.com/JYPuXq4GqM3L8_FYa-F9Ycz0td_qQ3HOPrjUGOdrYqgDXaBlfapQhNRlE-72v2i1T76ech6yVTTMLoPkKzaSQPJo0XIG_LlNCcry4nJry_UGCILphnY-CtwPsEI8SkYHugJllJz6-ju017oRoDsPsZU1p_YICW4ikyeHyhZTjNEgSLuXkM2fx0Y8b391JzW9oYmpACZ5SM6FQczX4oFGoTm9o7fJ5y71aoRNgNKh2dcHTcnOuG77jvvgfjvsiAolTAHazgZW2bShJZLfwutrlua54DeeYNYYCeOkykahdJNYji9AragrjxqNa_nXBZpVRgK4MFP4PDHKurHZ3m4Hpa4CQ7g7XpZW6H6A2bAh55xhBRO7OvCHyXpD-XGGiWQBS9nAVq60hJef2aPzW-9GVJyYMjxK26rAmZ4GijQDStGzDucfX9XxoaRuenXR50_5zonDZJ7a0Z6jPh8d33fRC8-MeXMsusTY33yBAXYQcw9SiYn0H9cL9ovUFWX3RjQQko9JmJXrcahYvpVFXXWEk6dByBMVgHf1eB0z4EQ67pgtQ2B0310Vq-8rxk4AJkKdquClRs2XordP-lsIx9WnOSPUdxS0bN6Ufu-6f22QDDnc28LpdCfNJ6JADfHQJolsrpGb_jgwdHlF_bsBwoWwDcgUbvIi0mE9jlK9b2peghXAjsqcPXW1WnN9_jua=w597-h895-no?authuser=0" alt="advert" />
          </AliceCarousel>
        </Link>
        <div className="shopAd">
          <Link to=''>
            <img className="advert2" src="https://lh3.googleusercontent.com/MczUWMuYFQfDnQi5aD9pK8bKzYRsRJUCZhMmQ1H9x1c6DO22fnQP1I45IStfcIj_2oazdJAzmKHxrmKvaFlXWso8TEV4mCCYpao1lftGWug14GNNEXdPSPr8u9xqelY4LDhy5hNSbPOxqzgBKzcy8LZQ6V0-4iAdJfsvUVarIAnVS-4vOAz-zByG3bljH731HuollT3jaaSXq7dVLdmn-jrncP4IojR_LxrtWepOabDGiHlMbzKCLh82OKPfkqfFUem9LDuC9dhwk1JJ5pK3KYvwgSJPkh-ODTJcucw5Gd-vzMPEK7FjEnJ0Rrwb3MJRQAMZQfoCCyQDgr3pD-2xhXIj1kMSbeV_wRaGI9X6BYV283HJG9JPygn6IKGZ3tthfWt6lMLrYQZM4-w_wmL_y6JDbItDdX021VF0P3ZbxRV7yI_xLIxN7o9LTMXvtnNU1BqZDyjp4WlQbf2hGS379RaExV82sKKY3fM7vPy_JZ3Ce8VEp5ZEwc7uRd0ueHsRcZMhYZMEAzlm4gtSS9I8h2fnYU6bY8dAeMOGpWXITIKAGje64ktU5dxSm6EO-q7enIlA6UdPknyUosIgfyhIbprRuxrYDVuxJuVUdiihLA3e4ya6236jHYyy3n0lSKaSXQyE7kFkXzqIupM8OClo3plB06TAGrxTW6tl2ongAsxR1pfrNgIYixiHLxu8=w717-h895-no?authuser=0" alt="snail mucin" />
          </Link>
        </div>
        <div className="shopAd2">
          <Link to="/shop">
            <img
              className="advert3"
              src="https://lh3.googleusercontent.com/ksqmxIqE-Uz2PkRdi9qBKe32LqbA5sFZFCBwdd4O-EBOOWDdb3_334uPdX6WJheGVSNLMyvU8fbscvgQA4SPXtll-QbZGNAIixn96nsaN4C_EL6K-oxgwD-UitgJnivZsDWUtv-NLic2xgT2F4SePHHuYsPeDxMsKVXVn_5xzTaTwhEpSdXMKrFEJvmbEdWqnEG3JhiwZPen2Bef_BVhJK0L8lKV7NF6B8lkJb6fjSECXZQL4LPeyW8-YU2CY9nJ7ZRHG0C2xSJkO42OkELt7o36np7iKgEaZnO-Ck-hWcn8H_k0aL-xaDDNkc6zACJIO9Q0vQ3ZxArv0TnvmM7j-g4MkD7rFfuLkllWW4mhkxXKLNPcaT5L77oWqeHw0BaaARyqUoS-zgCN-2lxWBx4st89_IValkkJlMQRuTjnxUO9C8TlMKTwYvl_X1cyNrxxJqm6cJWe8M_Y7sMk8m3C6VaRpyOKWqxAqM6hy92PR3q_kafDqvCYyh-prihhIZXERRj9DPYAz63uiN_5iqGYPMM8gSu0fhlfgHlCIzjf8gqobdD_YkmeCTNyE1OVD8lZ5gZxQ-eFUYeIDhBqhrfDNyif_xdBy1sca22ocd3VOhjos9nio-TQSvttSg3HXHdEf6QXTiK3y8cbm3fPQsURz1btEH_fNIGcQMeF3e_GJijP_yy8T4CBO05TxX-k=w960-h547-no?authuser=0"
              alt="Allies of Skin Cleanser"
            />
          </Link>
        </div>
        <div className="shopAd3">
          <Link to="/shop">
            <img className="advert4" src="https://lh3.googleusercontent.com/YQSLZeMcnQTYfmOX_TZF7jltw04VY5xlPLCNBKzfbekYrMnaDaSshVVF-3M756V9DKTbMUwuGxcIE-9UYyW8gmsd-2eyv4s2UiYLC_w5_XyWTOvLgp9O-Fl6WXpGzskRwurjVhp4GYTtAqLy20-qsuO5V4bZZxEoW96fAeec_OIKxZaZ9LVl7Qs7Fjdo38nsbPNWXqPf_OUc2IvQU2Tm2eZJfJt6kIb7-W0J1ptrvJJetfUqAGccoPE995xXfQ_J_ZVp6o5iTCiiVRfyhEkNVS-UWFcPXmBZUBMR874igPI5Iw6hJUuzhJgpVkUOxBB5s2zBDuRV_AcIZHNXaJyO_w9AKtvVBh5PGOVobaV5AaMFVicV3lgCvwQDB2OpAQt14Lrxs7Jo_BXLvGAJ7Yy7abRhWEbIloZxJhc9_XsRsY9BJM7aSTVP3m_DkmzGjxcHIYAPIWvo9BdrpBu84sEtetZn-aloNsQxpHnS1oilUvVqw4IJxf8260rOkge_J7mq5neidnTuSMqC7QafsOHTgjiMCD0zTLFL2JZ8Y6PM85hqAAcsRsyY8zzCZtSy0RI1rCfxAtLDMqz7zIbV-qJy7n4LiVkYGnmg2W-uGLlZqyxnVYqSlxLdIqxODyHLet2G8k63FSFkHI47fv9bEZyS1kAtdkI3PZtUMmuxCL4ghJM9jQ-xBPg8Jw60PoxF=w960-h784-no?authuser=0" alt="Serums" />
          </Link>
        </div>
      </div>
    </>
  );
};
export default Home;
