<template>
  <div class="home-container">
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/icon?family=Material+Icons"
    />
    <link href="https://cdn.jsdelivr.net/npm/@mdi/font@4.x/css/materialdesignicons.min.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900" rel="stylesheet">
    <vue-fab :mainBtnColor="mainBtnColor">
      <fab-item
        v-for="(item, idx) in menu"
        :idx="idx"
        :title="item.title"
        :color="item.color"
        :icon="item.icon"
        @clickItem="clickItem"
      />
    </vue-fab>
    <div class="home-menu">
      <div class="home-menu-right">
        <a
          href="https://example.com"
          target="_blank"
          rel="noreferrer noopener"
          class="home-link thqLink"
        >
          TRAMYTE.COM
        </a>
      </div>
      <div class="home-menu-left">
        <a
          href="https://example.com"
          target="_blank"
          rel="noreferrer noopener"
          class="home-link01 thqLink"
        >
          ỦNG HỘ TRONG NƯỚC
        </a>
        <a
          href="https://www.gofundme.com/f/covid19-food-medical-aid-for-saigon"
          target="_blank"
          rel="noreferrer noopener"
          class="home-link02 thqLink"
        >
          DONATE FROM ABROAD
        </a>
        <a
          href="https://www.gofundme.com/f/covid19-food-medical-aid-for-saigon"
          target="_blank"
          rel="noreferrer noopener"
          class="home-link03 thqLink"
        >
          LIÊN KẾT CÙNG CHÚNG TÔI
        </a>
        <a
          href="https://example.com"
          target="_blank"
          rel="noreferrer noopener"
          class="home-link04 thqLink"
        >
          VỀ CHÚNG TÔI
        </a>
        <a
          href="https://example.com"
          target="_blank"
          rel="noreferrer noopener"
          class="home-link05 thqLink"
        >
          LIÊN LẠC
        </a>
      </div>
    </div>
    <div class="home-container01">
      <div class="home-container02">
        <h2 class="home-text">
          Cổng thông tin trợ giúp thiện nguyện trong mùa covid-
          <span v-html="rawzpc1"></span>
        </h2>
<div id="app"   >
  <v-app id="inspire">
    <div class="text-center" >
      <v-dialog
        v-model="dialog"
        width="500"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="red lighten-2"
            dark
            v-bind="attrs"
            v-on="on"
          >
            Hướng Dẫn Sử Dụng
          </v-btn>
        </template>
  
        <v-card>
          <v-card-title class="text-h5 grey lighten-2">
             Hướng Dẫn Sử Dụng
          </v-card-title>
  
          <v-card-text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </v-card-text>
  
          <v-divider></v-divider>
  
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              text
              @click="dialog = false"
            >
              Thoát
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </v-app>
</div>

        <h2 class="home-text01">Anh/Chị cần gì ?</h2>
        <svg viewBox="0 0 1024 1024" class="home-icon">
          <path d="M512 992l480-480h-288v-512h-384v512h-288z"></path>
        </svg>
        <div class="home-tab">
          <!-- <router-link to="/binhoxy" class="home-navlink thqLink">
            Bình thở Oxy
          </router-link> -->
          <span class="home-text03" @click="clickItem"
            >Bình thở oxy<span></span
          ></span>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfNLHLLHOMFIQYyxrZhzu7VbaWAWnl_y7DzSflJma53y9nYJg/viewform"
            target="_blank"
            rel="noreferrer noopener"
            class="home-link06 thqLink"
          >
            <span>Thức ăn</span>
          </a>
          <span class="home-text03"><span>Cấp Cứu</span></span>
          <span class="home-text05"><span>Thuốc men</span></span>
          <span class="home-text07"><span>Bệnh viện</span></span>
          <span class="home-text09"><span>Helpline</span></span>
        </div>
        <app-oxygen
          v-for="(oxy, index) in binhoxy"
          :key="index"
      
          v-show="isopen.binhoxy"
          :text2="oxy.Contact_name"
          :text3="oxy.Province"
          :text4="oxy.City"
          :text6="oxy.last_verified_on"
          :text10="oxy.quantity_available"
          :text12="oxy.price"
          :text13="oxy.phone_1"
          :text14="oxy.phone_2"
         
        ></app-oxygen>
      </div>
      <div class="home-container03">
        <h2 class="home-text11">Anh/chị có thể hỗ trợ gì ?</h2>
        <svg viewBox="0 0 1024 1024" class="home-icon2">
          <path d="M512 992l480-480h-288v-512h-384v512h-288z"></path>
        </svg>
        <a
          href="https://docs.google.com/forms/d/1yZDBWFjmDHFVg5Ein5wbM5BKgjDzSuuXemJWWLLk1_U/prefill"
          target="_blank"
          rel="noreferrer noopener"
          class="home-link07"
        >
          <div class="home-tab1 thqLink">
            <span class="home-text12">Bình thở Oxy</span>
            <span class="home-text13"><span>Thức ăn</span></span>
            <span class="home-text15"><span>Cấp Cứu</span></span>
            <span class="home-text17">
              <span class="home-text18"></span>
              <span class="home-text19"></span>
              <span class="home-text20">Thuốc men</span>
            </span>
            <span class="home-text21">
              <span class="home-text22">Bệnh viện</span>
            </span>
            <span class="home-text23">
              <span class="home-text24"></span>
              <span class="home-text25"></span>
              <span class="home-text26">Helpline</span>
            </span>
          </div>
        </a>
      </div>
      <div class="home-container04">
        <a
          href="https://www.youtube.com/results?search_query=chua+covid+tai+nha"
          target="_blank"
          rel="noreferrer noopener"
          class="home-link08"
        >
          <h2 class="home-link09 thqLink"><span>Cách chữa F0 tại nhà</span></h2>
        </a>
        <div class="home-container05">
          <div class="home-container06">
            <a
              href="https://www.youtube.com/watch?v=w1OPU4FUCoo"
              target="_blank"
              rel="noreferrer noopener"
              class="home-link10"
            >
              <h3 class="home-text28 thqLink">
                Hỗ trợ theo dõi và tư vấn y tế cho người đang cách ly
              </h3>
            </a>
            <iframe
              src="https://www.youtube.com/embed/w1OPU4FUCoo"
              class="home-iframe"
            ></iframe>
          </div>
          <div class="home-container07">
            <a
              href="https://www.youtube.com/watch?v=YrDwmtgFEw0"
              target="_blank"
              rel="noreferrer noopener"
              class="home-link11"
            >
              <h3 class="home-text29 thqLink">
                Hỗ trợ theo dõi và tư vấn y tế cho người đang cách ly
              </h3>
            </a>
            <iframe
              src="https://www.youtube.com/embed/YrDwmtgFEw0"
              class="home-iframe1"
            ></iframe>
          </div>
          <div class="home-container08">
            <a
              href="https://www.youtube.com/watch?v=DytDevjjo9w"
              target="_blank"
              rel="noreferrer noopener"
              class="home-link12"
            >
              <h3 class="home-text30 thqLink">
                Hỗ trợ theo dõi và tư vấn y tế cho người đang cách ly
              </h3>
            </a>
            <iframe
              src="https://www.youtube.com/embed/DytDevjjo9w"
              class="home-iframe2"
            ></iframe>
          </div>
          <div class="home-container09">
            <a
              href="https://www.youtube.com/watch?v=JG-xmc-SuBk"
              target="_blank"
              rel="noreferrer noopener"
              class="home-link13"
            >
              <h3 class="home-text31 thqLink">
                Hỗ trợ theo dõi và tư vấn y tế cho người đang cách ly
              </h3>
            </a>
            <iframe
              src="https://www.youtube.com/embed/JG-xmc-SuBk"
              class="home-iframe3"
            ></iframe>
          </div>
          <div class="home-container10">
            <a
              href="https://www.youtube.com/watch?v=JG-xmc-SuBk"
              target="_blank"
              rel="noreferrer noopener"
              class="home-link14"
            >
              <h3 class="home-text32 thqLink">
                Hỗ trợ theo dõi và tư vấn y tế cho người đang cách ly
              </h3>
            </a>
            <iframe
              src="https://www.youtube.com/embed/JG-xmc-SuBk"
              class="home-iframe4"
            ></iframe>
          </div>
          <div class="home-container11">
            <a
              href="https://www.youtube.com/watch?v=JG-xmc-SuBk"
              target="_blank"
              rel="noreferrer noopener"
              class="home-link15"
            >
              <h3 class="home-text33 thqLink">
                Hỗ trợ theo dõi và tư vấn y tế cho người đang cách ly
              </h3>
            </a>
            <iframe
              src="https://www.youtube.com/embed/JG-xmc-SuBk"
              class="home-iframe5"
            ></iframe>
          </div>
        </div>
      </div>
    </div>


    <section class="home-search">
      <h3 class="home-text34">
        Verified Crowd Sourced Emergency Services Directory
      </h3>
      <div class="home-container12">
        <span>Search over 736+ Medicine resources!</span>
      </div>
      <div class="home-container13">
        <div class="home-search-items">
          <span class="home-text36">Oxygen</span>
          <span class="home-text37">Medicine</span>
        </div>
        <input type="text" placeholder="Search" class="thqTextInput" />
      </div>
    </section>
    <div class="home-container14">
      <h2 class="home-text38">
        Đội ngũ các chuyên gia, bác sĩ giàu kinh nghiệm với trình độ chuyên môn
        cao được chứng nhận bởi những bệnh viện lớn.
      </h2>
      <div class="home-container15">
        <div class="home-card1">
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDR8fGRvY3RvcnxlbnwwfHx8fDE2Mjc4OTQwMDc&amp;ixlib=rb-1.2.1&amp;w=1000"
            class="home-image"
          />
          <span class="home-text39">
            Hơn 20 năm kinh nghiệm khoa phụ Kinh nghiệm công tác: BV Hùng Vương,
            BV Quốc Tế Phụ Sản (đường Bùi Thị Xuân, Q1) và BV Hoàn Mỹ
          </span>
        </div>
        <div class="home-card11">
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDR8fGRvY3RvcnxlbnwwfHx8fDE2Mjc4OTQwMDc&amp;ixlib=rb-1.2.1&amp;w=1000"
            class="home-image1"
          />
          <span class="home-text40">
            Hơn 20 năm kinh nghiệm khoa phụ Kinh nghiệm công tác: BV Hùng Vương,
            BV Quốc Tế Phụ Sản (đường Bùi Thị Xuân, Q1) và BV Hoàn Mỹ
          </span>
        </div>
        <div class="home-card12">
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDR8fGRvY3RvcnxlbnwwfHx8fDE2Mjc4OTQwMDc&amp;ixlib=rb-1.2.1&amp;w=1000"
            class="home-image2"
          />
          <span class="home-text41">
            Hơn 20 năm kinh nghiệm khoa phụ Kinh nghiệm công tác: BV Hùng Vương,
            BV Quốc Tế Phụ Sản (đường Bùi Thị Xuân, Q1) và BV Hoàn Mỹ
          </span>
        </div>
        <div class="home-card13">
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDR8fGRvY3RvcnxlbnwwfHx8fDE2Mjc4OTQwMDc&amp;ixlib=rb-1.2.1&amp;w=1000"
            class="home-image3"
          />
          <span class="home-text42">
            Hơn 20 năm kinh nghiệm khoa phụ Kinh nghiệm công tác: BV Hùng Vương,
            BV Quốc Tế Phụ Sản (đường Bùi Thị Xuân, Q1) và BV Hoàn Mỹ
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppOxygen from "../components/oxygen";

export default {
  name: "Home",
  
  components: {
    AppOxygen,
  },

  methods: {

    
     clickItem: function () {
      this.isopen.binhoxy= !this.isopen.binhoxy
      }
    
  },

  data() {
    return {
      rawzpc1: " ",
     dialog: true,
   
    isopen: {
      binhoxy:false
    },
      menu: [   {
          icon: "ads_click",
          title: "Binh oxy",
          color: "#ff9900",
          
        },],
     
    
      
      mainBtnColor: "#3eaf7c",

      binhoxy: [
        {
          tp_id: 1,
          tinhh_id: 1,
          data_name: "COVIDFYI",
          Organization_name: "Trạm Oxy",
          Contact_name: "Tạ Thùy Trang",
          Province: "Hồ Chí Minh",
          City: "Hồ Chí Minh",
          address: "",
          latitude: "",
          longitude: "",
          phone_1: "0796 55 5564",
          phone_2: null,
          email: "",
          Zalo: "",
          Fb_messenger: "",
          Linkedin: "",
          Resource: "Bình gas, nạp gas, vận chuyển",
          Description: "",
          quantity_available: null,
          price: 0,
          Availability: "",
          comment: "",
          downvotes: 0,
          upvotes: 0,
          verifiedAndAvailable: 0,
          verifiedAndUnavailable: 0,
          deleted: false,
          created_by: "",
          created_on: "",
          Assigned_to: "",
          source_link: "",
          verified_by: "Umang Mathur",
          last_verified_on: "4/27/2021 14:28",
          verification_status: "Call again",
          Fraud: "",
        },
        {
          tp_id: null,
          tinhh_id: null,
          data_name: "",
          Organization_name: "ATM Oxy",
          Contact_name: "",
          Province: "Hồ Chí Minh",
          City: "Hồ Chí Minh",
          address: "",
          latitude: "",
          longitude: "",
          phone_1: "",
          phone_2: null,
          email: "",
          Zalo: "",
          Fb_messenger: "",
          Linkedin: "",
          Resource: "Bình gas, nạp gas, vận chuyển",
          Description: "",
          quantity_available: null,
          price:0,
          Availability: "",
          comment: "",
          downvotes: null,
          upvotes: null,
          verifiedAndAvailable: null,
          verifiedAndUnavailable: null,
          deleted: null,
          created_by: "",
          created_on: "",
          Assigned_to: "",
          source_link: "",
          verified_by: "",
          last_verified_on: "",
          verification_status: "",
          Fraud: "",
        },
      ],
    };
  },

  metaInfo: {
    title: "tramyte",
    meta: [
      {
        property: "og:title",
        content: "tramyte",
      },
    ],
  },
};
</script>

<style scoped>
#inspire >>> .v-application--wrap {
  min-height: 0 !important;
}
.home-container {
  width: 100%;
  height: auto;
  display: flex;
  min-height: 100vh;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}
.home-menu {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-self: flex-start;
  align-items: center;
  padding-top: var(--dl-space-space-doubleunit);
  padding-left: var(--dl-space-space-tripleunit);
  padding-right: var(--dl-space-space-tripleunit);
  flex-direction: row;
  justify-content: flex-start;
}
.home-menu-right {
  flex: 0 0 auto;
  display: flex;
  align-items: flex-start;
  flex-direction: row;
}
.home-link {
  text-decoration: none;
}
.home-menu-left {
  flex: 0 0 auto;
  display: flex;
  column-gap: var(--dl-space-space-unit);
  align-items: flex-start;
  margin-left: auto;
  flex-direction: row;
  justify-content: space-between;
}
.home-link01 {
  text-decoration: none;
}
.home-link02 {
  text-decoration: none;
}
.home-link03 {
  text-decoration: none;
}
.home-link04 {
  text-decoration: none;
}
.home-link05 {
  text-decoration: none;
}
.home-container01 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  padding-top: var(--dl-space-space-doubleunit);
  padding-left: var(--dl-space-space-doubleunit);
  padding-right: var(--dl-space-space-doubleunit);
  flex-direction: column;
  padding-bottom: var(--dl-space-space-doubleunit);
  justify-content: center;
}
.home-container02 {
  align-items: center;
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.home-text {
  color: #321fdc;
  align-self: center;
  margin-top: var(--dl-space-space-unit);
  margin-bottom: var(--dl-space-space-unit);
}
.home-text01 {
  color: var(--dl-color-danger-300);
  align-self: center;
  margin-top: var(--dl-space-space-unit);
  margin-bottom: var(--dl-space-space-unit);
}
.home-icon {
  fill: var(--dl-color-danger-500);
  width: 36px;
  height: 36px;
  align-self: center;
  margin-bottom: var(--dl-space-space-doubleunit);
  padding-bottom: 0px;
}
.home-tab {
  flex: 0 0 auto;
  display: flex;
  align-self: center;
  align-items: center;
  padding-top: var(--dl-space-space-unit);
  border-color: var(--dl-color-primary-500);
  border-width: 1px;
  padding-left: var(--dl-space-space-tripleunit);
  padding-right: var(--dl-space-space-tripleunit);
  flex-direction: row;
  padding-bottom: var(--dl-space-space-unit);
  justify-content: space-between;
}
.home-navlink {
  color: var(--dl-color-danger-500);
  font-size: 22px;
  font-style: normal;
  transition: 0.3s;
  font-weight: 700;
  padding-right: var(--dl-space-space-unit);
  text-decoration: none;
}

.home-link06 {
  color: var(--dl-color-danger-500);
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  padding-left: var(--dl-space-space-unit);
  padding-right: var(--dl-space-space-unit);
  text-decoration: none;
}
.home-text03 {
  cursor: pointer;
  color: var(--dl-color-danger-500);
  font-size: 22px;
  font-style: normal;
  transition: 0.3s;
  font-weight: 700;
  padding-left: var(--dl-space-space-unit);
  padding-right: var(--dl-space-space-unit);
}

.home-text05 {
  color: var(--dl-color-danger-500);
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  padding-left: var(--dl-space-space-unit);
  padding-right: var(--dl-space-space-unit);
}
.home-text07 {
  color: var(--dl-color-danger-500);
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  padding-left: var(--dl-space-space-unit);
  padding-right: var(--dl-space-space-unit);
}
.home-text09 {
  color: var(--dl-color-danger-500);
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  padding-left: var(--dl-space-space-unit);
}
.home-container03 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.home-text11 {
  color: #26bfab;
  align-self: center;
  margin-top: var(--dl-space-space-unit);
  margin-bottom: var(--dl-space-space-unit);
}
.home-icon2 {
  fill: #26bfab;
  width: 36px;
  height: 36px;
  align-self: center;
  margin-bottom: var(--dl-space-space-doubleunit);
  padding-bottom: 0px;
}
.home-link07 {
  display: contents;
}
.home-tab1 {
  flex: 0 0 auto;
  display: flex;
  align-self: center;
  align-items: center;
  padding-top: var(--dl-space-space-unit);
  border-color: var(--dl-color-primary-500);
  border-width: 1px;
  padding-left: var(--dl-space-space-tripleunit);
  padding-right: var(--dl-space-space-tripleunit);
  flex-direction: row;
  padding-bottom: var(--dl-space-space-unit);
  justify-content: space-between;
  text-decoration: none;
}
.home-text12 {
  color: #26bfab;
  font-size: 22px;
  font-style: normal;
  transition: 0.3s;
  font-weight: 700;
  padding-right: var(--dl-space-space-unit);
  text-decoration: none;
}

.home-text13 {
  color: #26bfab;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  padding-left: var(--dl-space-space-unit);
  padding-right: var(--dl-space-space-unit);
  text-decoration: none;
}
.home-text15 {
  color: #26bfab;
  font-size: 22px;
  font-style: normal;
  transition: 0.3s;
  font-weight: 700;
  padding-left: var(--dl-space-space-unit);
  padding-right: var(--dl-space-space-unit);
}

.home-text17 {
  color: var(--dl-color-danger-500);
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  padding-left: var(--dl-space-space-unit);
  padding-right: var(--dl-space-space-unit);
}
.home-text18 {
  color: #26bfab;
  font-style: normal;
  font-weight: 700;
}
.home-text19 {
  color: #26bfab;
  font-style: normal;
  font-weight: 700;
}
.home-text20 {
  color: #26bfab;
}
.home-text21 {
  color: var(--dl-color-danger-500);
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  padding-left: var(--dl-space-space-unit);
  padding-right: var(--dl-space-space-unit);
}
.home-text22 {
  color: #26bfab;
}
.home-text23 {
  color: var(--dl-color-danger-500);
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  padding-left: var(--dl-space-space-unit);
}
.home-text24 {
  color: #26bfab;
  font-style: normal;
  font-weight: 700;
}
.home-text25 {
  color: #26bfab;
  font-style: normal;
  font-weight: 700;
}
.home-text26 {
  color: #26bfab;
}
.home-container04 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-self: center;
  align-items: flex-start;
  padding-top: var(--dl-space-space-tripleunit);
  padding-left: 0px;
  padding-right: 0px;
  flex-direction: column;
}
.home-link08 {
  display: contents;
}
.home-link09 {
  color: var(--dl-color-danger-500);
  align-self: center;
  text-transform: capitalize;
  text-decoration: none;
}
.home-container05 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  column-gap: var(--dl-space-space-unit);
  margin-top: 0px;
  padding-top: var(--dl-space-space-unit);
  grid-row-gap: var(--dl-space-space-doubleunit);
  margin-bottom: 0px;
  flex-direction: row;
  padding-bottom: var(--dl-space-space-unit);
  justify-content: center;
}
.home-container06 {
  flex: 0 0 auto;
  width: 30%;
  display: flex;
  column-gap: var(--dl-space-space-unit);
  align-items: flex-start;
  grid-row-gap: var(--dl-space-space-halfunit);
  flex-direction: column;
  justify-content: flex-start;
}
.home-link10 {
  display: contents;
}
.home-text28 {
  color: var(--dl-color-danger-700);
  align-self: center;
  text-align: center;
  text-decoration: none;
}
.home-iframe {
  width: 320px;
  height: 200px;
  align-self: center;
}
.home-container07 {
  flex: 0 0 auto;
  width: 30%;
  display: flex;
  column-gap: var(--dl-space-space-unit);
  align-items: flex-start;
  grid-row-gap: var(--dl-space-space-halfunit);
  flex-direction: column;
  justify-content: flex-start;
}
.home-link11 {
  display: contents;
}
.home-text29 {
  color: var(--dl-color-danger-700);
  text-align: center;
  text-decoration: none;
}
.home-iframe1 {
  width: 320px;
  height: 200px;
  align-self: center;
}
.home-container08 {
  flex: 0 0 auto;
  width: 30%;
  display: flex;
  column-gap: var(--dl-space-space-unit);
  align-items: flex-start;
  grid-row-gap: var(--dl-space-space-halfunit);
  flex-direction: column;
  justify-content: flex-start;
}
.home-link12 {
  display: contents;
}
.home-text30 {
  color: var(--dl-color-danger-700);
  text-align: center;
  text-decoration: none;
}
.home-iframe2 {
  width: 320px;
  height: 200px;
  align-self: center;
}
.home-container09 {
  flex: 0 0 auto;
  width: 30%;
  display: flex;
  column-gap: var(--dl-space-space-unit);
  align-items: flex-start;
  grid-row-gap: var(--dl-space-space-halfunit);
  flex-direction: column;
  justify-content: flex-start;
}
.home-link13 {
  display: contents;
}
.home-text31 {
  color: var(--dl-color-danger-700);
  text-align: center;
  text-decoration: none;
}
.home-iframe3 {
  width: 320px;
  height: 200px;
  align-self: center;
}
.home-container10 {
  flex: 0 0 auto;
  width: 30%;
  display: flex;
  column-gap: var(--dl-space-space-unit);
  align-items: flex-start;
  grid-row-gap: var(--dl-space-space-halfunit);
  flex-direction: column;
  justify-content: flex-start;
}
.home-link14 {
  display: contents;
}
.home-text32 {
  color: var(--dl-color-danger-700);
  text-align: center;
  text-decoration: none;
}
.home-iframe4 {
  width: 320px;
  height: 200px;
  align-self: center;
}
.home-container11 {
  flex: 0 0 auto;
  width: 30%;
  display: flex;
  column-gap: var(--dl-space-space-unit);
  align-items: flex-start;
  grid-row-gap: var(--dl-space-space-halfunit);
  flex-direction: column;
  justify-content: flex-start;
}
.home-link15 {
  display: contents;
}
.home-text33 {
  color: var(--dl-color-danger-700);
  text-align: center;
  text-decoration: none;
}
.home-iframe5 {
  width: 320px;
  height: 200px;
  align-self: center;
}
.home-search {
  flex: 0 0 auto;
  width: 100%;
  align-items: center;
  padding-top: var(--dl-space-space-tripleunit);
  grid-row-gap: var(--dl-space-space-unit);
  flex-direction: column;
  padding-bottom: var(--dl-space-space-tripleunit);
  justify-content: center;
}
.home-text34 {
  text-align: center;
}
.home-container12 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  justify-content: center;
}
.home-container13 {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  grid-row-gap: var(--dl-space-space-halfunit);
  flex-direction: column;
}
.home-search-items {
  flex: 0 0 auto;
  display: flex;
  align-self: center;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.home-text36 {
  padding-right: var(--dl-space-space-unit);
}
.home-text37 {
  padding-left: var(--dl-space-space-unit);
}
.home-container14 {
  flex: 0 0 auto;
  display: none;
  align-items: center;
  margin-left: var(--dl-space-space-doubleunit);
  margin-right: var(--dl-space-space-doubleunit);
  flex-direction: column;
  justify-content: center;
}
.home-text38 {
  color: var(--dl-color-primary-300);
  text-align: center;
  margin-left: 0px;
  margin-right: 0px;
  padding-left: var(--dl-space-space-tripleunit);
  padding-right: var(--dl-space-space-tripleunit);
}
.home-container15 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  padding-top: var(--dl-space-space-doubleunit);
  padding-left: var(--dl-space-space-tripleunit);
  padding-right: var(--dl-space-space-tripleunit);
  flex-direction: row;
  padding-bottom: var(--dl-space-space-doubleunit);
  justify-content: space-between;
}
.home-card1 {
  flex: 0 0 auto;
  width: 200px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.home-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.home-text39 {
  padding-top: var(--dl-space-space-unit);
}
.home-card11 {
  flex: 0 0 auto;
  width: 200px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.home-image1 {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.home-text40 {
  padding-top: var(--dl-space-space-unit);
}
.home-card12 {
  flex: 0 0 auto;
  width: 200px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.home-image2 {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.home-text41 {
  padding-top: var(--dl-space-space-unit);
}
.home-card13 {
  flex: 0 0 auto;
  width: 200px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.home-image3 {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.home-text42 {
  padding-top: var(--dl-space-space-unit);
}
</style>
