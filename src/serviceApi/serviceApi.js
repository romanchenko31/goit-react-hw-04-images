class ServiceApi {
  async getGallery(page = 1) {
    try {
      const responseApi = await fetch(
        `https://pixabay.com/api/?key=29920184-cb57a37281186e19b397ef599&q=${this.query}&image_type=photo&pretty=true&page=${page}&per_page=12`
      );
      if (responseApi.ok) {
        const results = await responseApi.json();
        return results.hits;
      }
    } catch (err) {
      throw new Error(`Something failed`);
    }
  }
  set queryGallery(value) {
    this.query = value;
  }
  get queryGallery() {
    return this.query;
  }
}
export default ServiceApi;
