<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Welcome extends CI_Controller {

	/**
	 * Index Page for this controller.
	 *
	 * Maps to the following URL
	 * 		http://example.com/index.php/welcome
	 *	- or -  
	 * 		http://example.com/index.php/welcome/index
	 *	- or -
	 * Since this controller is set as the default controller in 
	 * config/routes.php, it's displayed at http://example.com/
	 *
	 * So any other public methods not prefixed with an underscore will
	 * map to /index.php/welcome/<method_name>
	 * @see http://codeigniter.com/user_guide/general/urls.html
	 */


	  public function __construct()
 	{
 		# code...
 		parent::__construct();
 		$this->load->library('session');
 		$this->load->helper('url');
 		//echo 'hoo';

 	}

	public function index()
	{
		$this->load->view('welcome_message');
	}

	public function a(){
	 // $this->load->view('OurProject');
	  //$this->load->view('home');	
	  $this->load->view('sitee');	
	
	}
	public function b(){
		$this->load->model('somodel');
		$this->somodel->adduser();

	}
	public function c()
	{
		$this->load->view('signin');
	}
	public function d()
	{   
		$this->load->model('somodel');
		//echo "yooyoy";
		$this->somodel->sig();
		$dat=$this->session->userdata('user_id');
		print_r($dat);
	}
	public function fs()

	 {  
	 	$in1=$this->session->userdata('in1');
	 	
	 	$in2=$this->session->userdata('in2');
	 	$in3=$this->session->userdata('in3');
	 	$this->load->model('somodel');
		$this->somodel->findsociety($in1,$in2,$in3);

	 }
	 public function logoutt()
	 {
	 	 $this->session->sess_destroy();
	 	 echo "done";

	 }
	 public function getevents()
	 {
	 	$this->load->model('somodel');
	 	$this->somodel->fetchevents();
	 }

	 public function contact_det()
	 {
	 	$this->load->model('somodel');
	 	$this->somodel->storedet();
	 }

	 public function trial()
	 {
	 	echo "helllooooo";
	 }
}

/* End of file welcome.php */
/* Location: ./application/controllers/welcome.php */