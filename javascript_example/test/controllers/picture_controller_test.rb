require 'test_helper'

class PictureControllerTest < ActionDispatch::IntegrationTest
  test "should get enlargeandnarrowpicture" do
    get picture_enlargeandnarrowpicture_url
    assert_response :success
  end

end
